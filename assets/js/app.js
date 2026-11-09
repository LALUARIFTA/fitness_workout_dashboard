/**
 * PulseFit Interactive Dashboard Application Logic
 * Modular template code with LocalStorage persistence & audio synthesis
 */
/*************************************************************************
 * 2. REAL HUMAN PHOTOGRAPHY RENDERERS FOR STAGE & THUMBNAILS
 *************************************************************************/
function getStageArtworkHTML(exercise, isPlaying) {
  const motionClass = isPlaying ? "stage-photo-playing" : "";
  const liveHudHTML = isPlaying ? `
    <div class="absolute bottom-6 right-16 z-20 flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/60 animate-bounce">
      <span class="w-2.5 h-2.5 rounded-full bg-[#F26430] animate-ping"></span>
      <div class="text-left">
        <div class="text-[11px] font-extrabold text-[#1E2235] leading-none">${exercise.cadence || 'Active Set'}</div>
        <div class="text-[9.5px] font-bold text-[#F26430] mt-0.5">❤️ ${exercise.bpm || '134 BPM'} • ${exercise.kcal}</div>
      </div>
    </div>
  ` : "";

  return `
    <div class="relative w-full h-full overflow-hidden flex items-center justify-center">
      <!-- High-Resolution Real Human Fitness Photograph -->
      <img 
        src="${exercise.photoUrl}" 
        alt="${exercise.title}" 
        class="w-full h-full object-cover object-center transition-transform duration-700 ${motionClass}"
        onerror="this.src='https://placehold.co/900x500/CBE0EC/1E2235?text=${encodeURIComponent(exercise.title)}'"
      />
      <!-- Soft Studio Atmosphere Overlay so top-left text & controls pop exactly like the reference -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#DFEEF6]/75 via-[#DFEEF6]/20 to-transparent pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#1E2235]/15 via-transparent to-[#FFFFFF]/25 pointer-events-none"></div>
      ${liveHudHTML}
    </div>
  `;
}

// Real Human Workout Thumbnail Generator for the Right Column `EXERCISES` Cards
function getMiniThumbnailHTML(exercise) {
  return `
    <div class="relative w-full h-full overflow-hidden" style="background:${exercise.thumbBg}">
      <img 
        src="${exercise.thumbUrl}" 
        alt="${exercise.title}" 
        class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        onerror="this.src='https://placehold.co/150x110/D5E5EF/1E2235?text=Fit'"
      />
      <div class="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
    </div>
  `;
}

/*************************************************************************
 * 3. STATE MANAGEMENT & AUDIO SYNTHESIS (WEB AUDIO API)
 *************************************************************************/
const STORAGE_KEY = 'pulsefit_state_v1';
function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
const savedState = loadSavedState() || {};

let currentMenuIndex = 1; // Default Menu 1 = Workout Session (matches reference)
let currentDay = savedState.currentDay || 1;
let currentExerciseIndex = 0;
let isTimerRunning = false;
let timerInterval = null;
let remainingRealTime = 30;
let totalExerciseTime = 45;
let audioVolume = typeof savedState.audioVolume === 'number' ? savedState.audioVolume : 0.62;
let isMuted = !!savedState.isMuted;
let userScore = typeof savedState.userScore === 'number' ? savedState.userScore : APP_CONFIG.user.score;
let hydrationLiters = typeof savedState.hydrationLiters === 'number' ? savedState.hydrationLiters : APP_CONFIG.user.hydrationStart;

function saveAppState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currentDay,
      userScore,
      hydrationLiters,
      audioVolume,
      isMuted
    }));
  } catch (e) {
    // Ignore private browsing quota errors
  }
}

// Web Audio API Synthesizer for subtle UI clicks, timer ticks & completion chimes
let audioCtx = null;
function playUISound(type = "click") {
  if (isMuted || audioVolume <= 0.02) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    const vol = Math.min(0.25, audioVolume * 0.22);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.05);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === "tick") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(vol * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === "complete") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.09); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.18); // G5
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36);
      osc.start(now);
      osc.stop(now + 0.36);
    }
  } catch (e) {
    // Ignore audio errors if blocked by browser autoplay policy
  }
}

function showToast(msg, color = "#63D471") {
  const banner = document.getElementById("toastBanner");
  const text = document.getElementById("toastMessage");
  const icon = document.getElementById("toastIcon");
  text.textContent = msg;
  icon.style.backgroundColor = color;
  banner.classList.remove("opacity-0", "translate-y-3");
  banner.classList.add("opacity-100", "translate-y-0");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    banner.classList.remove("opacity-100", "translate-y-0");
    banner.classList.add("opacity-0", "translate-y-3");
  }, 2400);
}

/*************************************************************************
 * 4. SIDEBAR MENU SWITCHING (WITH LOCKED CONTAINER DIMENSIONS)
 *************************************************************************/
function switchMenu(targetIndex) {
  if (targetIndex === currentMenuIndex) return;
  playUISound("click");

  // Move active orange bubble on sidebar (52px step per button)
  const bubble = document.getElementById("navActiveBubble");
  bubble.style.transform = `translateY(${targetIndex * 52}px)`;

  // Update button active icon colors
  document.querySelectorAll(".nav-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === targetIndex);
  });

  // Animate out current menu & animate in target menu
  const oldView = document.getElementById(`menu-${currentMenuIndex}`);
  const newView = document.getElementById(`menu-${targetIndex}`);

  oldView.classList.remove("active");
  oldView.classList.add("exit-up");
  setTimeout(() => {
    oldView.classList.remove("exit-up");
  }, 380);

  newView.classList.add("active");
  currentMenuIndex = targetIndex;
}

function triggerLogoPulse() {
  playUISound("complete");
  switchMenu(1);
  showToast("PulseFit Studio • Day " + currentDay + " Active", "#F26430");
}

/*************************************************************************
 * 5. DAY 1 - DAY 4 SWITCHING & EXERCISE SELECTION
 *************************************************************************/
function selectDay(dayNumber) {
  if (dayNumber === currentDay && currentExerciseIndex === 0) return;
  playUISound("click");
  stopWorkoutTimer();

  currentDay = dayNumber;
  currentExerciseIndex = 0;
  saveAppState();

  // Update Top Day Tabs Styling
  for (let d = 1; d <= 4; d++) {
    const tab = document.getElementById(`dayTab-${d}`);
    const dot = tab.querySelector(".day-dot");
    const emoji = tab.querySelector(".day-emoji");
    if (d === dayNumber) {
      tab.className = "day-tab flex items-center gap-2.5 text-[22px] font-extrabold text-[#1E2235] focus:outline-none";
      dot.classList.remove("hidden");
      emoji.classList.remove("hidden");
    } else {
      tab.className = "day-tab flex items-center gap-2 text-[22px] font-bold text-[#B0B5C6] focus:outline-none";
      dot.classList.add("hidden");
      emoji.classList.add("hidden");
    }
  }

  renderExercisesList();
  loadExerciseIntoStage(0, true);
  showToast(`Switched to ${WORKOUT_DAYS[dayNumber].dayName} Program ${WORKOUT_DAYS[dayNumber].badge}`, "#F26430");
}

function renderExercisesList() {
  const dayData = WORKOUT_DAYS[currentDay];
  const listEl = document.getElementById("exercisesListContainer");
  const countLabel = document.getElementById("exercisesCountLabel");
  countLabel.textContent = `${dayData.exercises.length} movements`;

  listEl.innerHTML = dayData.exercises.map((ex, idx) => {
    const isSelected = idx === currentExerciseIndex;
    let statusHTML = "";

    if (ex.status === "progress") {
      // Orange partial progress ring matching item 1 in reference image
      statusHTML = `
        <div class="w-6 h-6 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8.5" fill="none" stroke="#E9EDF5" stroke-width="2.6"/>
            <circle cx="12" cy="12" r="8.5" fill="none" stroke="#F26430" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="53.4" stroke-dashoffset="18" transform="rotate(-90 12 12)"/>
          </svg>
        </div>
      `;
    } else if (ex.status === "done") {
      // Solid green checkmark circle matching items 2 & 3 in reference image
      statusHTML = `
        <div class="w-5 h-5 rounded-full bg-[#63D471] text-white flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(99,212,113,0.35)]">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      `;
    } else {
      // Coral-red cross circle matching item 4 in reference image
      statusHTML = `
        <div class="w-5 h-5 rounded-full bg-[#FF5660] text-white flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(255,86,96,0.35)]">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      `;
    }

    return `
      <div onclick="selectExercise(${idx})" class="exercise-row group flex items-center justify-between ${isSelected ? 'selected' : ''}">
        <div class="flex items-center gap-3.5 min-w-0">
          <!-- Rounded Studio Real Human Photo Thumbnail (74px x 54px) -->
          <div class="w-[74px] h-[54px] rounded-[16px] overflow-hidden shrink-0 shadow-sm">
            ${getMiniThumbnailHTML(ex)}
          </div>
          <div class="min-w-0">
            <div class="text-[13.5px] font-extrabold text-[#1E2235] truncate">${ex.title}</div>
            <div class="flex items-center gap-2 text-[11px] font-semibold text-[#8E95A9] mt-1">
              <span class="flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#6D748C"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" stroke="#FFF" stroke-width="2.2" fill="none"/></svg>
                ${ex.durationMins}
              </span>
              <span class="flex items-center gap-0.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#6D748C"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                ${ex.kcal}
              </span>
            </div>
          </div>
        </div>
        ${statusHTML}
      </div>
    `;
  }).join("");
}

function selectExercise(index) {
  if (index === currentExerciseIndex) return;
  playUISound("click");
  stopWorkoutTimer();
  currentExerciseIndex = index;
  renderExercisesList();
  loadExerciseIntoStage(index, true);
}

function nextExercise() {
  const dayData = WORKOUT_DAYS[currentDay];
  const nextIdx = (currentExerciseIndex + 1) % dayData.exercises.length;
  selectExercise(nextIdx);
}

function loadExerciseIntoStage(index, animate = false) {
  const dayData = WORKOUT_DAYS[currentDay];
  const ex = dayData.exercises[index];

  // Update Counter & Subtitle ("Exercise 1/5" on initial load to match screenshot)
  const denom = index < dayData.headerTotalCount ? dayData.headerTotalCount : dayData.exercises.length;
  document.getElementById("stageCounterTitle").textContent = `Exercise ${index + 1}/${denom}`;
  document.getElementById("stageSubtitle").textContent = ex.title;

  // Update Stage Background & Artwork
  const stageBgEl = document.getElementById("stageBackground");
  stageBgEl.style.background = ex.stageBg;

  const visualContainer = document.getElementById("stageVisualContainer");
  if (animate) {
    visualContainer.style.opacity = "0";
    visualContainer.style.transform = "scale(0.97) translateY(6px)";
    setTimeout(() => {
      visualContainer.innerHTML = getStageArtworkHTML(ex, isTimerRunning);
      visualContainer.style.opacity = "1";
      visualContainer.style.transform = "scale(1) translateY(0)";
    }, 160);
  } else {
    visualContainer.innerHTML = getStageArtworkHTML(ex, isTimerRunning);
  }

  // Update Favorite Button State
  const likeBtn = document.getElementById("likeBtn");
  likeBtn.style.backgroundColor = ex.liked ? "#FF5660" : "#B0B7C9";

  // Update 4 Metric Pills
  document.getElementById("metricType").textContent = ex.category;
  document.getElementById("metricDiff").textContent = ex.difficulty;
  document.getElementById("metricTotalTime").textContent = `${ex.totalTimeSec}sec`;
  remainingRealTime = ex.realTimeSec;
  totalExerciseTime = ex.totalTimeSec;
  document.getElementById("metricRealTime").textContent = `${remainingRealTime}sec`;

  // Update Circular Progress Ring around Play/Pause button
  updateStageProgressRing();

  // Populate Scrollable Description Timeline Steps
  const descContainer = document.getElementById("descriptionScrollContainer");
  descContainer.innerHTML = ex.steps.map((step, sIdx) => {
    const isLast = sIdx === ex.steps.length - 1;
    return `
      <div class="flex gap-4 relative">
        <!-- Numbered Circle + Vertical Connector Line -->
        <div class="flex flex-col items-center shrink-0">
          <div class="w-6 h-6 rounded-full bg-[#1E2235] text-white text-[11px] font-bold flex items-center justify-center shadow-sm z-10">
            ${step.stepNum}
          </div>
          ${!isLast ? `<div class="w-[1.5px] flex-1 bg-[#B8BFCE] my-1.5"></div>` : `<div class="w-[1.5px] h-6 bg-[#B8BFCE] mt-1.5"></div>`}
        </div>

        <!-- Step Content -->
        <div class="pb-2 flex-1">
          <div class="text-[12.5px] font-extrabold text-[#1E2235]">${step.heading}</div>
          <p class="text-[11.5px] font-medium text-[#525A6E] leading-relaxed mt-0.5">
            ${step.text}
          </p>
          ${step.subHeading ? `
            <div class="text-[12.5px] font-extrabold text-[#1E2235] mt-3">${step.subHeading}</div>
            <p class="text-[11.5px] font-medium text-[#525A6E] leading-relaxed mt-0.5">
              ${step.subText}
            </p>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");
  descContainer.scrollTop = 0;
}

/*************************************************************************
 * 6. INTERACTIVE WORKOUT TIMER & PROGRESS RING
 *************************************************************************/
function updateStageProgressRing() {
  const circle = document.getElementById("stageProgressCircle");
  const circumference = 201; // 2 * pi * 32
  // On initial default state (30sec / 45sec), match the exact orange arc length on bottom-right of button
  const progressRatio = (totalExerciseTime - remainingRealTime) / totalExerciseTime;
  const visualRatio = Math.max(0.38, Math.min(1, progressRatio + 0.35));
  const offset = circumference - visualRatio * circumference;
  circle.style.strokeDashoffset = offset;
}

function toggleWorkoutTimer() {
  playUISound("click");
  if (isTimerRunning) {
    stopWorkoutTimer();
    showToast("Workout timer paused", "#8E95A9");
  } else {
    startWorkoutTimer();
    showToast("Workout timer started! Keep breathing steadily 🔥", "#F26430");
  }
}

function startWorkoutTimer() {
  isTimerRunning = true;
  document.getElementById("liveWorkoutBadge").classList.remove("hidden");
  document.getElementById("liveWorkoutBadge").classList.add("flex");
  document.getElementById("pauseIcon").classList.remove("hidden");
  document.getElementById("playIcon").classList.add("hidden");

  const ex = WORKOUT_DAYS[currentDay].exercises[currentExerciseIndex];
  document.getElementById("stageVisualContainer").innerHTML = getStageArtworkHTML(ex, true);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingRealTime > 0) {
      remainingRealTime--;
      playUISound("tick");
      document.getElementById("metricRealTime").textContent = `${remainingRealTime}sec`;
      updateStageProgressRing();
    } else {
      // Exercise Completed!
      playUISound("complete");
      stopWorkoutTimer();
      ex.status = "done";
      userScore += 15;
      document.getElementById("userScoreCounter").textContent = userScore;
      saveAppState();
      renderExercisesList();
      showToast(`Completed ${ex.title}! +15 XP Earned 🎉`, "#63D471");
      remainingRealTime = ex.totalTimeSec;
    }
  }, 1000);
}

function stopWorkoutTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
  document.getElementById("liveWorkoutBadge").classList.add("hidden");
  document.getElementById("liveWorkoutBadge").classList.remove("flex");
  const ex = WORKOUT_DAYS[currentDay].exercises[currentExerciseIndex];
  document.getElementById("stageVisualContainer").innerHTML = getStageArtworkHTML(ex, false);
}

/*************************************************************************
 * 7. HEART PARTICLE BURST & VERTICAL VOLUME SLIDER
 *************************************************************************/
function toggleFavoriteExercise(event) {
  playUISound("click");
  const ex = WORKOUT_DAYS[currentDay].exercises[currentExerciseIndex];
  ex.liked = !ex.liked;

  const btn = document.getElementById("likeBtn");
  btn.classList.remove("heart-pop");
  void btn.offsetWidth;
  btn.classList.add("heart-pop");
  btn.style.backgroundColor = ex.liked ? "#FF5660" : "#98A0B3";

  if (ex.liked) {
    spawnHeartParticles(btn);
    showToast(`Saved "${ex.title}" to Favorite Movements ❤️`, "#FF5660");
  } else {
    showToast(`Removed "${ex.title}" from Favorites`, "#8E95A9");
  }
}

function spawnHeartParticles(containerBtn) {
  for (let i = 0; i < 6; i++) {
    const p = document.createElement("span");
    p.className = "heart-particle text-xs";
    p.textContent = "❤️";
    const angle = (Math.PI * 2 * i) / 6;
    const dist = 24 + Math.random() * 16;
    p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--ty", `${Math.sin(angle) * dist - 10}px`);
    containerBtn.appendChild(p);
    setTimeout(() => p.remove(), 750);
  }
}

// Vertical Volume Drag Interaction
let isDraggingVolume = false;
function startVolumeDrag(e) {
  isDraggingVolume = true;
  updateVolumeFromEvent(e);
  window.addEventListener("mousemove", onVolumeMove);
  window.addEventListener("mouseup", stopVolumeDrag);
  window.addEventListener("touchmove", onVolumeMove);
  window.addEventListener("touchend", stopVolumeDrag);
}

function onVolumeMove(e) {
  if (!isDraggingVolume) return;
  updateVolumeFromEvent(e);
}

function stopVolumeDrag() {
  isDraggingVolume = false;
  saveAppState();
  window.removeEventListener("mousemove", onVolumeMove);
  window.removeEventListener("mouseup", stopVolumeDrag);
  window.removeEventListener("touchmove", onVolumeMove);
  window.removeEventListener("touchend", stopVolumeDrag);
}

function updateVolumeFromEvent(e) {
  const track = document.getElementById("volumeTrack");
  const rect = track.getBoundingClientRect();
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const relY = rect.bottom - clientY;
  const ratio = Math.max(0, Math.min(1, relY / rect.height));
  audioVolume = ratio;
  isMuted = ratio <= 0.02;
  renderVolumeUI();
}

function toggleMute() {
  isMuted = !isMuted;
  if (!isMuted && audioVolume < 0.15) audioVolume = 0.62;
  renderVolumeUI();
  saveAppState();
  playUISound("click");
  showToast(isMuted ? "Workout Audio Muted 🔇" : `Volume ${Math.round(audioVolume * 100)}% 🔊`, "#1E2235");
}

function renderVolumeUI() {
  const pct = isMuted ? 0 : Math.round(audioVolume * 100);
  document.getElementById("volumeFill").style.height = `${pct}%`;
  document.getElementById("volumeKnob").style.bottom = `calc(${pct}% - 8px)`;
  const svg = document.getElementById("speakerIconSvg");
  if (isMuted || pct === 0) {
    svg.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z" fill="#9AA1B4"></path><line x1="22" y1="9" x2="16" y2="15" stroke="#FF5660" stroke-width="2.2" stroke-linecap="round"/><line x1="16" y1="9" x2="22" y2="15" stroke="#FF5660" stroke-width="2.2" stroke-linecap="round"/>`;
  } else {
    svg.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z" fill="#1E2235"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="#1E2235" stroke-width="2.2" stroke-linecap="round"></path>`;
  }
}

/*************************************************************************
 * 8. POPULATING THE OTHER 4 MENUS & MODALS (ALL SCROLLABLE INTERNALLY)
 *************************************************************************/
function initSecondaryMenus() {
  // --- MENU 0: Dashboard Overview ---
  updateDashboardChart("kcal");

  const meals = PULSEFIT_DATA.nutrition.meals;
  document.getElementById("mealPlanScrollList").innerHTML = meals.map(m => `
    <div class="flex items-center justify-between p-3 rounded-2xl bg-[#F8F9FC] border border-slate-100 hover:bg-slate-100/70 transition">
      <div class="flex items-center gap-3.5">
        <img src="${m.photo}" alt="${m.name}" class="w-12 h-11 rounded-xl object-cover shadow-sm shrink-0" onerror="this.src='https://placehold.co/96x88/FFF3D1/F26430?text=Meal'" />
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-extrabold text-[#F26430] uppercase">${m.time}</span>
            <span class="text-xs font-extrabold text-[#1E2235]">${m.name}</span>
          </div>
          <div class="text-[11px] font-medium text-[#8E95A9] mt-0.5">${m.macros}</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs font-extrabold text-[#1E2235]">${m.kcal}</span>
        <span class="w-5 h-5 rounded-full ${m.done ? 'bg-[#63D471] text-white' : 'bg-slate-200 text-slate-400'} flex items-center justify-center text-[10px] font-bold">✓</span>
      </div>
    </div>
  `).join("");

  const roadmap = PULSEFIT_DATA.schedule;
  document.getElementById("weeklyRoadmapList").innerHTML = roadmap.map(r => `
    <div onclick="switchMenu(1); selectDay(${r.dayLink});" class="p-2.5 rounded-2xl bg-[#F8F9FC] hover:bg-[#F0F3FA] cursor-pointer transition flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="${r.photo}" alt="${r.day}" class="w-11 h-11 rounded-xl object-cover shadow-sm shrink-0" onerror="this.src='https://placehold.co/88x88/CBE0EC/1E2235?text=Fit'" />
        <div>
          <div class="text-xs font-extrabold text-[#1E2235]">${r.day} • ${r.focus}</div>
          <div class="text-[11px] font-semibold text-[#8E95A9] mt-0.5">${r.mins} • ${r.status}</div>
        </div>
      </div>
      <span class="text-xs font-bold text-[#F26430] shrink-0">Open →</span>
    </div>
  `).join("");

  // --- MENU 2: Community & Friends (With Real Human Portraits & Shared Workout Photos) ---
  const feedItems = PULSEFIT_DATA.community.feed;
  document.getElementById("communityFeedList").innerHTML = feedItems.map((f) => `
    <div class="p-3.5 rounded-2xl bg-[#F8F9FC] flex items-center justify-between gap-3 border border-slate-100">
      <div class="flex items-center gap-3.5 min-w-0">
        <img src="${f.avatar}" alt="${f.name}" class="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0" onerror="this.src='https://placehold.co/88x88/EDE7FF/1E2235?text=U'" />
        <div class="min-w-0">
          <div class="text-xs font-bold text-[#1E2235] leading-snug"><span class="font-extrabold">${f.name}</span> ${f.action}</div>
          <div class="text-[10.5px] font-semibold text-[#8E95A9] mt-0.5">${f.time}</div>
        </div>
      </div>
      <div class="flex items-center gap-2.5 shrink-0">
        <img src="${f.workoutPhoto}" alt="Workout snapshot" class="w-14 h-11 rounded-xl object-cover shadow-sm hidden sm:block" onerror="this.style.display='none'" />
        <button onclick="cheerFriend(this, ${f.cheers})" class="px-3 py-1.5 rounded-xl bg-white text-[#F26430] text-xs font-extrabold shadow-sm hover:scale-105 transition">
          👏 ${f.cheers}
        </button>
      </div>
    </div>
  `).join("");

  const friendsList = PULSEFIT_DATA.community.leaderboard;
  const lbHTML = friendsList.map(fr => `
    <div class="p-2.5 rounded-2xl flex items-center justify-between ${fr.isMe ? 'bg-[#FFF0EB] border border-[#F26430]/30' : 'bg-[#F8F9FC]'}">
      <div class="flex items-center gap-2.5">
        <span class="w-5 text-center text-xs font-extrabold ${fr.rank <= 3 ? 'text-[#F26430]' : 'text-[#8E95A9]'}">#${fr.rank}</span>
        <img src="${fr.avatar}" alt="${fr.name}" class="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" onerror="this.src='https://placehold.co/72x72/DCE2F9/1E2235?text=F'" />
        <div>
          <div class="text-xs font-extrabold text-[#1E2235]">${fr.name}</div>
          <div class="text-[10px] font-bold text-[#8E95A9] uppercase">${fr.level}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-extrabold text-[#1E2235]">${fr.score} pts</span>
        ${!fr.isMe ? `<button onclick="showToast('Challenge sent to ${fr.name}! ⚡', '#F26430')" class="px-2.5 py-1 rounded-lg bg-white text-[10px] font-extrabold text-[#F26430] shadow-sm hover:bg-[#F26430] hover:text-white transition">Challenge</button>` : ''}
      </div>
    </div>
  `).join("");
  document.getElementById("leaderboardScrollList").innerHTML = lbHTML;
  document.getElementById("modalFriendsScroll").innerHTML = lbHTML;

  // --- MENU 3: Analytics & Progress ---
  const muscles = PULSEFIT_DATA.analytics.muscles;
  document.getElementById("muscleAnalyticsList").innerHTML = muscles.map(m => `
    <div class="p-3.5 rounded-2xl bg-[#F8F9FC]">
      <div class="flex justify-between text-xs font-extrabold text-[#1E2235] mb-1.5">
        <span>${m.zone}</span>
        <span class="text-[#8E95A9]">${m.pr} • <strong class="text-[#1E2235]">${m.pct}%</strong></span>
      </div>
      <div class="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div class="h-full rounded-full" style="width:${m.pct}%; background:${m.color}"></div>
      </div>
    </div>
  `).join("");

  const history = PULSEFIT_DATA.analytics.history;
  document.getElementById("workoutHistoryLog").innerHTML = history.map(h => `
    <div class="p-3 rounded-2xl bg-[#F8F9FC] flex items-center justify-between border border-slate-100">
      <div class="flex items-center gap-3">
        <img src="${h.photo}" alt="${h.title}" class="w-11 h-11 rounded-xl object-cover shadow-sm shrink-0" onerror="this.src='https://placehold.co/88x88/E3F8EA/1E2235?text=Log'" />
        <div>
          <div class="text-[10px] font-bold text-[#F26430] uppercase">${h.date}</div>
          <div class="text-xs font-extrabold text-[#1E2235] mt-0.5">${h.title}</div>
        </div>
      </div>
      <div class="text-right shrink-0">
        <div class="text-xs font-extrabold text-[#63D471]">${h.kcal}</div>
        <div class="text-[10.5px] font-semibold text-[#8E95A9]">${h.mins}</div>
      </div>
    </div>
  `).join("");

  // --- MENU 4: Coach Chat & Settings ---
  renderCoachChat();
  const settingsItems = PULSEFIT_DATA.settings;
  document.getElementById("settingsScrollList").innerHTML = settingsItems.map((s, idx) => `
    <div class="p-3.5 rounded-2xl bg-[#F8F9FC] flex items-center justify-between">
      <div>
        <div class="text-xs font-extrabold text-[#1E2235]">${s.label}</div>
        <div class="text-[11px] font-medium text-[#8E95A9] mt-0.5">${s.desc}</div>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" ${s.checked ? 'checked' : ''} onchange="playUISound('click'); showToast('Preference updated ✓')" class="sr-only peer">
        <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F26430]"></div>
      </label>
    </div>
  `).join("");
}

// Dashboard Bar Chart Renderer
function updateDashboardChart(mode, btnEl) {
  if (btnEl) {
    playUISound("click");
    document.querySelectorAll(".dash-chart-tab").forEach(b => {
      b.className = "dash-chart-tab px-3 py-1.5 rounded-lg text-[#8E95A9]";
    });
    btnEl.className = "dash-chart-tab px-3 py-1.5 rounded-lg bg-white text-[#1E2235] shadow-sm";
  }
  const data = mode === "mins"
    ? [ {d:"Mon",v:35,h:65}, {d:"Tue",v:45,h:82}, {d:"Wed",v:30,h:55}, {d:"Thu",v:50,h:92,active:true}, {d:"Fri",v:40,h:74}, {d:"Sat",v:25,h:48}, {d:"Sun",v:20,h:38} ]
    : [ {d:"Mon",v:210,h:62}, {d:"Tue",v:275,h:80}, {d:"Wed",v:190,h:55}, {d:"Thu",v:290,h:94,active:true}, {d:"Fri",v:240,h:72}, {d:"Sat",v:165,h:50}, {d:"Sun",v:120,h:36} ];

  const unit = mode === "mins" ? "m" : "kcal";
  document.getElementById("dashboardBarsContainer").innerHTML = data.map(item => `
    <div class="flex flex-col items-center h-full justify-end group cursor-pointer" onclick="showToast('${item.d}: ${item.v} ${unit}', '#F26430')">
      <span class="text-[10px] font-extrabold text-[#1E2235] opacity-0 group-hover:opacity-100 transition mb-1">${item.v}</span>
      <div class="w-full max-w-[34px] rounded-xl transition-all duration-500 ${item.active ? 'bg-[#F26430] shadow-[0_6px_14px_rgba(242,100,48,0.35)]' : 'bg-[#E9ECF6] group-hover:bg-[#CBD2E6]'}" style="height:${item.h}%"></div>
      <span class="text-[11px] font-bold ${item.active ? 'text-[#1E2235]' : 'text-[#8E95A9]'} mt-2">${item.d}</span>
    </div>
  `).join("");
}

function addWater() {
  playUISound("complete");
  hydrationLiters = Math.min(3.5, +(hydrationLiters + 0.25).toFixed(2));
  document.getElementById("waterCounterText").textContent = `${hydrationLiters} / 2.5 L`;
  saveAppState();
  showToast(`Hydration logged: ${hydrationLiters}L 💧`, "#38BDF8");
}

function cheerFriend(btn, baseCount) {
  playUISound("complete");
  btn.innerHTML = `👏 ${baseCount + 1}`;
  btn.classList.add("bg-[#FFF0EB]");
  showToast("Sent encouragement cheer! 👏", "#F26430");
}

function triggerCheerAll() {
  playUISound("complete");
  userScore += 15;
  document.getElementById("userScoreCounter").textContent = userScore;
  saveAppState();
  showToast("Group Cheer sent to all 14 friends! +15 XP 🎉", "#63D471");
}

// Coach Chat Messages
const coachConversation = PULSEFIT_DATA.coach.conversation;

function renderCoachChat() {
  const box = document.getElementById("coachChatMessages");
  box.innerHTML = coachConversation.map(m => m.sender === "coach" ? `
    <div class="flex gap-2.5 items-start">
      <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=120&q=80" alt="Coach Elena" class="w-8 h-8 rounded-full object-cover ring-2 ring-[#EDE7FF] shrink-0" onerror="this.src='https://placehold.co/64x64/EDE7FF/1E2235?text=CE'" />
      <div class="bg-[#F4F6FB] text-[#1E2235] rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs font-medium leading-relaxed max-w-[85%]">
        ${m.text}
      </div>
    </div>
  ` : `
    <div class="flex justify-end items-end gap-2">
      <div class="bg-[#F26430] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-xs font-semibold leading-relaxed max-w-[82%]">
        ${m.text}
      </div>
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="You" class="w-7 h-7 rounded-full object-cover shrink-0" onerror="this.src='https://placehold.co/56x56/DCD6F7/1E2235?text=AR'" />
    </div>
  `).join("");
  box.scrollTop = box.scrollHeight;
}

function sendCoachMessage(e) {
  e.preventDefault();
  const input = document.getElementById("coachChatInput");
  const val = input.value.trim();
  if (!val) return;
  playUISound("click");
  coachConversation.push({ sender: "user", text: val });
  input.value = "";
  renderCoachChat();

  setTimeout(() => {
    playUISound("complete");
    const ex = WORKOUT_DAYS[currentDay].exercises[currentExerciseIndex];
    coachConversation.push({
      sender: "coach",
      text: `For "${ex.title}", focus on exhaling smoothly during the hardest part of the movement and keeping your shoulders relaxed. You're doing awesome at 1021 XP!`
    });
    renderCoachChat();
  }, 650);
}

// Friends Quick Modal
function openFriendsModal(highlightName) {
  playUISound("click");
  const modal = document.getElementById("friendsModal");
  const card = document.getElementById("friendsModalCard");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    card.classList.remove("scale-95");
    card.classList.add("scale-100");
  }, 20);
  if (highlightName) {
    showToast(`Viewing ${highlightName}'s Beginner League profile`, "#8B6BF2");
  }
}

function closeFriendsModal() {
  playUISound("click");
  const modal = document.getElementById("friendsModal");
  const card = document.getElementById("friendsModalCard");
  modal.classList.add("opacity-0");
  card.classList.remove("scale-100");
  card.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 280);
}

/*************************************************************************
 * 9. INITIALIZATION ON WINDOW LOAD
 *************************************************************************/
window.addEventListener("DOMContentLoaded", () => {
  // Restore day selection if saved
  if (currentDay && currentDay >= 1 && currentDay <= 4) {
    for (let d = 1; d <= 4; d++) {
      const tab = document.getElementById(`dayTab-${d}`);
      if (tab) {
        const dot = tab.querySelector(".day-dot");
        const emoji = tab.querySelector(".day-emoji");
        if (d === currentDay) {
          tab.className = "day-tab flex items-center gap-2.5 text-[22px] font-extrabold text-[#1E2235] focus:outline-none";
          if (dot) dot.classList.remove("hidden");
          if (emoji) emoji.classList.remove("hidden");
        } else {
          tab.className = "day-tab flex items-center gap-2 text-[22px] font-bold text-[#B0B5C6] focus:outline-none";
          if (dot) dot.classList.add("hidden");
          if (emoji) emoji.classList.add("hidden");
        }
      }
    }
  }

  // Restore saved counters
  const scoreEl = document.getElementById("userScoreCounter");
  if (scoreEl) scoreEl.textContent = userScore;
  const waterEl = document.getElementById("waterCounterText");
  if (waterEl) waterEl.textContent = `${hydrationLiters} / 2.5 L`;

  renderVolumeUI();
  renderExercisesList();
  loadExerciseIntoStage(0, false);
  initSecondaryMenus();
});

// Reset helper for template users
window.resetPulseFitState = function() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};

// Global function exports for onclick bindings
window.switchMenu = switchMenu;
window.selectDay = selectDay;
window.selectExercise = selectExercise;
window.nextExercise = nextExercise;
window.toggleWorkoutTimer = toggleWorkoutTimer;
window.toggleFavoriteExercise = toggleFavoriteExercise;
window.toggleMute = toggleMute;
window.startVolumeDrag = startVolumeDrag;
window.triggerLogoPulse = triggerLogoPulse;
window.addWater = addWater;
window.cheerFriend = cheerFriend;
window.triggerCheerAll = triggerCheerAll;
window.sendCoachMessage = sendCoachMessage;
window.openFriendsModal = openFriendsModal;
window.closeFriendsModal = closeFriendsModal;
window.updateDashboardChart = updateDashboardChart;
window.showToast = showToast;
window.playUISound = playUISound;

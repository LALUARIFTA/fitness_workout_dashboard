/**
 * PulseFit — Template Dataset
 * ---------------------------------------------------------------
 * All content rendered by the dashboard lives here or in config.js.
 * Edit these arrays to make the template yours — no markup changes
 * required. Safe to load from a CMS/API later (same shape).
 */
const WORKOUT_DAYS = {
      1: {
        dayName: "Day 1",
        badge: "👶",
        headerTotalCount: 5, // Displays "Exercise 1/5" on initial load to match screenshot
        exercises: [
          {
            id: "d1-e1",
            title: "Abdominal muscles",
            durationMins: "10 mins",
            kcal: "40Kcal",
            category: "Stretching",
            difficulty: "2",
            totalTimeSec: 45,
            realTimeSec: 30,
            status: "progress", // orange partial ring
            progressPercent: 62,
            liked: true,
            stageBg: "linear-gradient(135deg, #CBE0EC 0%, #DFEEF6 55%, #C6DCE8 100%)",
            thumbBg: "#D5E5EF",
            photoUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&q=80",
            bpm: "128 BPM",
            cadence: "15 Reps • Core Hold",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Begin in a kneeling position, hands-on thighs and toes curled underneath the buttocks.",
                subHeading: "Actions",
                subText: "Move forward on the knees bringing the forearms to the floor, hands close together. Lift the legs and take the stability ball firmly between your hands while engaging your deep transverse abdominal wall."
              },
              {
                stepNum: 2,
                heading: "Core Compression & Balance:",
                text: "Lean back to a 45-degree seated V-sit angle with one knee bent and one leg extended gracefully over the mat.",
                subHeading: "Breathing Cues",
                subText: "Exhale steadily through pursed lips as you rotate your torso toward the stability ball. Keep your shoulders relaxed and away from your ears."
              },
              {
                stepNum: 3,
                heading: "Isometric Hold & Release:",
                text: "Hold the peak contraction for 3 seconds while maintaining neutral cervical spine alignment, then slowly return to center.",
                subHeading: "Pro Form Tip",
                subText: "Avoid pulling with your hip flexors—focus 100% of the tension into your upper and lower abdominal muscles."
              },
              {
                stepNum: 4,
                heading: "Repetition Tempo:",
                text: "Complete 15 controlled repetitions per side with a 2-second eccentric lowering phase to maximize core fiber recruitment.",
                subHeading: "Safety Note",
                subText: "Keep your lower back lightly imprinted or neutral; stop immediately if you feel lumbar strain."
              }
            ]
          },
          {
            id: "d1-e2",
            title: "Jumping on ball",
            durationMins: "15 mins",
            kcal: "90Kcal",
            category: "Cardio Core",
            difficulty: "3",
            totalTimeSec: 60,
            realTimeSec: 45,
            status: "done", // green check circle
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #CFC2F2 0%, #E3DCFA 55%, #C5B4EE 100%)",
            thumbBg: "#9E82D8",
            photoUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300&q=80",
            bpm: "144 BPM",
            cadence: "Dynamic Bounce",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Sit tall right at the apex of the stability ball with your feet hip-width apart and knees bent at 90 degrees.",
                subHeading: "Actions",
                subText: "Engage your pelvic floor and abdominal wall, then initiate rhythmic vertical bounces while keeping your spine tall and shoulders stacked."
              },
              {
                stepNum: 2,
                heading: "Dynamic Arm Drive:",
                text: "Coordinate opposite arm swings or reach both hands forward for counterbalance as your bounce cadence increases.",
                subHeading: "Breathing Cues",
                subText: "Inhale for two bounces and exhale for two bounces to sustain aerobic rhythm without losing core bracing."
              },
              {
                stepNum: 3,
                heading: "Stabilization Landing:",
                text: "Absorb every rebound softly through your hips and core rather than letting your spine compress.",
                subHeading: "Target Muscles",
                subText: "Quads, glute medius, erector spinae, and deep abdominal stabilizers."
              }
            ]
          },
          {
            id: "d1-e3",
            title: "With dumbbells",
            durationMins: "10 mins",
            kcal: "50Kcal",
            category: "Strength",
            difficulty: "2",
            totalTimeSec: 50,
            realTimeSec: 35,
            status: "done", // green check circle
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #B2DCEB 0%, #D4EFF8 55%, #9ACCE0 100%)",
            thumbBg: "#76B5CD",
            photoUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80",
            bpm: "132 BPM",
            cadence: "12 Reps • Sculpt",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Stand with feet shoulder-width apart holding a pair of light ergonomic dumbbells at chest height with neutral wrists.",
                subHeading: "Actions",
                subText: "Press the dumbbells overhead in a smooth arc while simultaneously bracing your ribcage down to prevent lower-back arching."
              },
              {
                stepNum: 2,
                heading: "Eccentric Control:",
                text: "Lower the weights over 3 full seconds back to shoulder level, feeling constant tension across your deltoids and upper torso.",
                subHeading: "Form Check",
                subText: "Keep knees softly unlocked and weight evenly distributed across your mid-foot and heels."
              },
              {
                stepNum: 3,
                heading: "Finisher Pulse:",
                text: "On the final 10 seconds, perform controlled micro-pulses at 90 degrees to maximize muscular endurance.",
                subHeading: "Recovery",
                subText: "Shake out your arms and roll your shoulders backward between sets."
              }
            ]
          },
          {
            id: "d1-e4",
            title: "Jumping",
            durationMins: "10 mins",
            kcal: "110Kcal",
            category: "Plyometric",
            difficulty: "4",
            totalTimeSec: 45,
            realTimeSec: 25,
            status: "skipped", // coral-red x circle matching reference
            progressPercent: 30,
            liked: false,
            stageBg: "linear-gradient(135deg, #FAD0DA 0%, #FDE6EC 55%, #F7BECB 100%)",
            thumbBg: "#FCA3B5",
            photoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=80",
            bpm: "158 BPM",
            cadence: "Explosive Plyo",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Begin in an athletic quarter-squat stance with knees tracking over toes and arms loaded slightly behind your hips.",
                subHeading: "Actions",
                subText: "Explode upward driving your knees toward your chest while extending your arms overhead for maximum vertical lift."
              },
              {
                stepNum: 2,
                heading: "Whisper-Quiet Landing:",
                text: "Land toe-to-heel with soft, bent knees to absorb impact forces smoothly and immediately load into the next jump.",
                subHeading: "Pacing",
                subText: "Maintain a crisp, bouncy rhythm for the full 45-second interval."
              },
              {
                stepNum: 3,
                heading: "Low-Impact Modification:",
                text: "If needed, substitute with rapid alternating high-knee marches while keeping your heart rate elevated.",
                subHeading: "Safety",
                subText: "Never land with locked knees."
              }
            ]
          },
          {
            id: "d1-e5",
            title: "Plank Core Hold",
            durationMins: "12 mins",
            kcal: "65Kcal",
            category: "Isometric",
            difficulty: "3",
            totalTimeSec: 60,
            realTimeSec: 40,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #D3EFE0 0%, #EAF8F0 55%, #C3E7D4 100%)",
            thumbBg: "#DFEFE4",
            photoUrl: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=300&q=80",
            bpm: "136 BPM",
            cadence: "60s Isometric Hold",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Place forearms parallel on the mat directly underneath your shoulders with toes tucked firmly.",
                subHeading: "Actions",
                subText: "Lift your knees to form a straight line from crown to heels. Squeeze glutes and quads simultaneously."
              },
              {
                stepNum: 2,
                heading: "Scapular Protraction:",
                text: "Press the floor away actively with your forearms so your shoulder blades stay flat and wide.",
                subHeading: "Breathing",
                subText: "Take slow 4-second nasal inhales and forceful 4-second mouth exhales."
              }
            ]
          },
          {
            id: "d1-e6",
            title: "Swiss Ball Pike",
            durationMins: "15 mins",
            kcal: "85Kcal",
            category: "Core Flow",
            difficulty: "4",
            totalTimeSec: 50,
            realTimeSec: 30,
            status: "progress",
            progressPercent: 45,
            liked: true,
            stageBg: "linear-gradient(135deg, #FDE8C9 0%, #FFF5E4 55%, #F8DCAD 100%)",
            thumbBg: "#F7DFBA",
            photoUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80",
            bpm: "140 BPM",
            cadence: "10 Controlled Pikes",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Assume a high push-up position with your shins resting securely on top of the stability ball.",
                subHeading: "Actions",
                subText: "Draw your hips upward toward the ceiling by contracting your lower abdominals, rolling the ball forward toward your hands."
              },
              {
                stepNum: 2,
                heading: "Controlled Extension:",
                text: "Pause for 1 second at the top of the pike, then unroll slowly back to a flat plank without letting your hips sag.",
                subHeading: "Focus",
                subText: "Keep weight stacked over your palms throughout the movement."
              }
            ]
          },
          {
            id: "d1-e7",
            title: "Cooldown Spine Stretch",
            durationMins: "8 mins",
            kcal: "30Kcal",
            category: "Mobility",
            difficulty: "1",
            totalTimeSec: 60,
            realTimeSec: 60,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #DCE2F9 0%, #EEF1FD 55%, #CCD5F5 100%)",
            thumbBg: "#D8E0F8",
            photoUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80",
            bpm: "98 BPM",
            cadence: "Deep Recovery Stretch",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Kneel on the soft mat and sit your hips back onto your heels in an extended Child's Pose.",
                subHeading: "Actions",
                subText: "Walk your fingertips forward across the floor while letting your chest melt gently toward the mat."
              },
              {
                stepNum: 2,
                heading: "Thoracic Decompression:",
                text: "Walk both hands 30 degrees to the left to lengthen your right lat and intercostal muscles, hold 20 seconds, then switch sides.",
                subHeading: "Completion",
                subText: "Finish with three deep recovery breaths."
              }
            ]
          }
        ]
      },

      2: {
        dayName: "Day 2",
        badge: "🔥",
        headerTotalCount: 6,
        exercises: [
          {
            id: "d2-e1",
            title: "HIIT Kettlebell Swing",
            durationMins: "12 mins",
            kcal: "115Kcal",
            category: "HIIT Power",
            difficulty: "3",
            totalTimeSec: 60,
            realTimeSec: 40,
            status: "progress",
            progressPercent: 70,
            liked: true,
            stageBg: "linear-gradient(135deg, #FAD0DA 0%, #FDE6EC 55%, #F7BECB 100%)",
            thumbBg: "#FCA3B5",
            photoUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80",
            bpm: "152 BPM",
            cadence: "20 Power Swings",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Stand with feet slightly wider than shoulder-width, gripping the weight bell with both hands in front of your hips.",
                subHeading: "Actions",
                subText: "Hinge sharply at the hips keeping your shins vertical, then snap your hips forward to float the weight to chest height."
              },
              {
                stepNum: 2,
                heading: "Posterior Chain Drive:",
                text: "Remember that the swing is a horizontal hip hinge—never lift with your shoulders or squat the movement.",
                subHeading: "Breathing",
                subText: "Sharp nasal inhale on the backswing, explosive exhale at the top lock-out."
              }
            ]
          },
          {
            id: "d2-e2",
            title: "Stability Ball Hamstring Curl",
            durationMins: "10 mins",
            kcal: "65Kcal",
            category: "Lower Body",
            difficulty: "3",
            totalTimeSec: 45,
            realTimeSec: 30,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #CBE0EC 0%, #DFEEF6 55%, #C6DCE8 100%)",
            thumbBg: "#D5E5EF",
            photoUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=300&q=80",
            bpm: "130 BPM",
            cadence: "15 Glute Curls",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Lie supine on the floor with your heels and lower calves resting atop the stability ball.",
                subHeading: "Actions",
                subText: "Bridge your hips up and curl the ball inward toward your glutes using your hamstrings."
              },
              {
                stepNum: 2,
                heading: "Hip Extension Lock:",
                text: "Keep your hips elevated throughout the curl and extension phase for maximum glute-hamstring synergy.",
                subHeading: "Tempo",
                subText: "2 seconds in, 1 second squeeze, 3 seconds out."
              }
            ]
          },
          {
            id: "d2-e3",
            title: "Explosive Tuck Jumps",
            durationMins: "10 mins",
            kcal: "120Kcal",
            category: "Plyometric",
            difficulty: "4",
            totalTimeSec: 40,
            realTimeSec: 20,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #CFC2F2 0%, #E3DCFA 55%, #C5B4EE 100%)",
            thumbBg: "#9E82D8",
            photoUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=300&q=80",
            bpm: "162 BPM",
            cadence: "High-Output Plyo",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Stand tall with feet hip-width apart and core braced.",
                subHeading: "Actions",
                subText: "Dip into a quick quarter-squat and jump vertically, tucking knees toward chest height before landing softly."
              }
            ]
          },
          {
            id: "d2-e4",
            title: "Renegade Dumbbell Row",
            durationMins: "14 mins",
            kcal: "85Kcal",
            category: "Upper & Core",
            difficulty: "3",
            totalTimeSec: 50,
            realTimeSec: 35,
            status: "progress",
            progressPercent: 40,
            liked: false,
            stageBg: "linear-gradient(135deg, #B2DCEB 0%, #D4EFF8 55%, #9ACCE0 100%)",
            thumbBg: "#76B5CD",
            photoUrl: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=300&q=80",
            bpm: "139 BPM",
            cadence: "16 Alternating Rows",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Hold a high plank with hands gripping hex dumbbells on the floor and feet wide for anti-rotation stability.",
                subHeading: "Actions",
                subText: "Row one dumbbell toward your hip while keeping both hips square to the mat."
              }
            ]
          },
          {
            id: "d2-e5",
            title: "Medicine Ball Slam",
            durationMins: "10 mins",
            kcal: "95Kcal",
            category: "Power Cardio",
            difficulty: "3",
            totalTimeSec: 45,
            realTimeSec: 45,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #D3EFE0 0%, #EAF8F0 55%, #C3E7D4 100%)",
            thumbBg: "#DFEFE4",
            photoUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=300&q=80",
            bpm: "155 BPM",
            cadence: "Explosive Core Slam",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Reach the ball fully overhead into triple extension onto your toes.",
                subHeading: "Actions",
                subText: "Engage your lats and abs to slam the ball forcefully in front of your feet, catching it on the bounce."
              }
            ]
          },
          {
            id: "d2-e6",
            title: "Active Hip Opener Flow",
            durationMins: "8 mins",
            kcal: "35Kcal",
            category: "Mobility",
            difficulty: "1",
            totalTimeSec: 60,
            realTimeSec: 50,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #FDE8C9 0%, #FFF5E4 55%, #F8DCAD 100%)",
            thumbBg: "#F7DFBA",
            photoUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=300&q=80",
            bpm: "104 BPM",
            cadence: "Deep Mobility Flow",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Step your right foot outside your right hand in a long runner's lunge.",
                subHeading: "Actions",
                subText: "Rotate your right arm toward the ceiling while exhaling deeply to mobilize your thoracic spine."
              }
            ]
          }
        ]
      },

      3: {
        dayName: "Day 3",
        badge: "⚡",
        headerTotalCount: 5,
        exercises: [
          {
            id: "d3-e1",
            title: "Dumbbell Thruster Press",
            durationMins: "15 mins",
            kcal: "105Kcal",
            category: "Full Body",
            difficulty: "3",
            totalTimeSec: 55,
            realTimeSec: 38,
            status: "progress",
            progressPercent: 68,
            liked: true,
            stageBg: "linear-gradient(135deg, #B2DCEB 0%, #D4EFF8 55%, #9ACCE0 100%)",
            thumbBg: "#76B5CD",
            photoUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=300&q=80",
            bpm: "148 BPM",
            cadence: "15 Full Thrusters",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Hold dumbbells in a front-rack position at shoulder height with elbows pointing slightly forward.",
                subHeading: "Actions",
                subText: "Descend into a deep squat, then drive forcefully through your heels to press the weights overhead in one fluid motion."
              },
              {
                stepNum: 2,
                heading: "Core Transfer:",
                text: "Use the upward momentum from your legs to transfer energy directly into the overhead lockout.",
                subHeading: "Breathing",
                subText: "Inhale on the squat descent, exhale powerfully as the dumbbells lock overhead."
              }
            ]
          },
          {
            id: "d3-e2",
            title: "Swiss Ball Balance Squat",
            durationMins: "12 mins",
            kcal: "75Kcal",
            category: "Stability",
            difficulty: "2",
            totalTimeSec: 45,
            realTimeSec: 30,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #CFC2F2 0%, #E3DCFA 55%, #C5B4EE 100%)",
            thumbBg: "#9E82D8",
            photoUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=300&q=80",
            bpm: "134 BPM",
            cadence: "Controlled Squat",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Hold the stability ball extended in front of your chest as a counterbalance.",
                subHeading: "Actions",
                subText: "Lower into a parallel squat while keeping your chest proud and knees aligned with your second toe."
              }
            ]
          },
          {
            id: "d3-e3",
            title: "Lateral Skater Bounds",
            durationMins: "10 mins",
            kcal: "100Kcal",
            category: "Agility",
            difficulty: "3",
            totalTimeSec: 45,
            realTimeSec: 28,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #FAD0DA 0%, #FDE6EC 55%, #F7BECB 100%)",
            thumbBg: "#FCA3B5",
            photoUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=300&q=80",
            bpm: "154 BPM",
            cadence: "Lateral Agility",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Load weight onto your right leg at the edge of your mat.",
                subHeading: "Actions",
                subText: "Bound laterally to land softly on your left foot, sweeping your trailing leg behind for balance."
              }
            ]
          },
          {
            id: "d3-e4",
            title: "V-Sit Ball Pass",
            durationMins: "10 mins",
            kcal: "60Kcal",
            category: "Abdominals",
            difficulty: "3",
            totalTimeSec: 50,
            realTimeSec: 35,
            status: "skipped",
            progressPercent: 25,
            liked: false,
            stageBg: "linear-gradient(135deg, #CBE0EC 0%, #DFEEF6 55%, #C6DCE8 100%)",
            thumbBg: "#D5E5EF",
            photoUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=300&q=80",
            bpm: "131 BPM",
            cadence: "Core Transfer",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Lie flat on your back holding the stability ball overhead with legs extended.",
                subHeading: "Actions",
                subText: "Fold upward into a V-sit, transferring the ball from your hands to between your ankles, then lower with control."
              }
            ]
          },
          {
            id: "d3-e5",
            title: "Supine Spinal Twist",
            durationMins: "8 mins",
            kcal: "25Kcal",
            category: "Recovery",
            difficulty: "1",
            totalTimeSec: 60,
            realTimeSec: 60,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #D3EFE0 0%, #EAF8F0 55%, #C3E7D4 100%)",
            thumbBg: "#DFEFE4",
            photoUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=300&q=80",
            bpm: "96 BPM",
            cadence: "Restorative Stretch",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Lie on your back with arms in a T-shape and knees bent at 90 degrees.",
                subHeading: "Actions",
                subText: "Let both knees gently fall to one side while gazing over the opposite shoulder."
              }
            ]
          }
        ]
      },

      4: {
        dayName: "Day 4",
        badge: "🏆",
        headerTotalCount: 5,
        exercises: [
          {
            id: "d4-e1",
            title: "Dynamic Core Flow",
            durationMins: "15 mins",
            kcal: "85Kcal",
            category: "Core Mastery",
            difficulty: "3",
            totalTimeSec: 60,
            realTimeSec: 45,
            status: "progress",
            progressPercent: 80,
            liked: true,
            stageBg: "linear-gradient(135deg, #CBE0EC 0%, #DFEEF6 55%, #C6DCE8 100%)",
            thumbBg: "#D5E5EF",
            photoUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&q=80",
            bpm: "138 BPM",
            cadence: "Russian Twist Flow",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Begin seated on the mat with the stability ball held lightly at your sternum.",
                subHeading: "Actions",
                subText: "Flow smoothly from a Russian twist into an extended single-leg reach, maintaining continuous core tension."
              },
              {
                stepNum: 2,
                heading: "Mind-Muscle Connection:",
                text: "Move deliberately without momentum—every inch of rotation originates from your obliques.",
                subHeading: "Breathing",
                subText: "Deep rhythmic diaphragmatic breathing throughout the 60-second finisher."
              }
            ]
          },
          {
            id: "d4-e2",
            title: "Plyo Star Jumps",
            durationMins: "10 mins",
            kcal: "115Kcal",
            category: "Cardio Peak",
            difficulty: "4",
            totalTimeSec: 45,
            realTimeSec: 30,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #FAD0DA 0%, #FDE6EC 55%, #F7BECB 100%)",
            thumbBg: "#FCA3B5",
            photoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=80",
            bpm: "160 BPM",
            cadence: "Peak Cardio Burst",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Start in a compact crouch with fingertips brushing the sides of your calves.",
                subHeading: "Actions",
                subText: "Explode upward extending arms and legs out into a full mid-air star before landing softly."
              }
            ]
          },
          {
            id: "d4-e3",
            title: "Dumbbell Arnold Press",
            durationMins: "12 mins",
            kcal: "65Kcal",
            category: "Shoulders",
            difficulty: "2",
            totalTimeSec: 50,
            realTimeSec: 35,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #B2DCEB 0%, #D4EFF8 55%, #9ACCE0 100%)",
            thumbBg: "#76B5CD",
            photoUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80",
            bpm: "135 BPM",
            cadence: "12 Rotational Presses",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Hold dumbbells at chin level with palms facing toward you.",
                subHeading: "Actions",
                subText: "Rotate palms outward 180 degrees as you press overhead to recruit all three deltoid heads."
              }
            ]
          },
          {
            id: "d4-e4",
            title: "Ball Wall Squat Hold",
            durationMins: "10 mins",
            kcal: "70Kcal",
            category: "Endurance",
            difficulty: "2",
            totalTimeSec: 60,
            realTimeSec: 40,
            status: "done",
            progressPercent: 100,
            liked: false,
            stageBg: "linear-gradient(135deg, #CFC2F2 0%, #E3DCFA 55%, #C5B4EE 100%)",
            thumbBg: "#9E82D8",
            photoUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300&q=80",
            bpm: "132 BPM",
            cadence: "Isometric Wall Squat",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Pin the stability ball against the wall with your lower back and walk feet forward.",
                subHeading: "Actions",
                subText: "Roll down until thighs are parallel to the floor and hold steady."
              }
            ]
          },
          {
            id: "d4-e5",
            title: "Full Body Savasana Breath",
            durationMins: "10 mins",
            kcal: "20Kcal",
            category: "Mindfulness",
            difficulty: "1",
            totalTimeSec: 60,
            realTimeSec: 60,
            status: "done",
            progressPercent: 100,
            liked: true,
            stageBg: "linear-gradient(135deg, #D3EFE0 0%, #EAF8F0 55%, #C3E7D4 100%)",
            thumbBg: "#DFEFE4",
            photoUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
            thumbUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80",
            bpm: "92 BPM",
            cadence: "Mindful Recovery",
            steps: [
              {
                stepNum: 1,
                heading: "Start point:",
                text: "Rest comfortably on the mat with calves elevated on the stability ball.",
                subHeading: "Actions",
                subText: "Close your eyes and celebrate completing your 4-day Beginner Milestone!"
              }
            ]
          }
        ]
      }
    };

const PULSEFIT_DATA = {
  workouts: WORKOUT_DAYS,

  nutrition: {
    meals: [
        { time: "07:30 AM", name: "Pre-Workout Oat & Berry Bowl", macros: "42g Carbs • 18g Protein", kcal: "320 Kcal", done: true, photo: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=160&q=80" },
        { time: "09:15 AM", name: "Coach-Guided Morning Hydration & Mobility", macros: "Zero Sugar • 5g BCAA", kcal: "25 Kcal", done: true, photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=160&q=80" },
        { time: "12:30 PM", name: "Grilled Salmon, Quinoa & Avocado Salad", macros: "38g Protein • 22g Healthy Fats", kcal: "540 Kcal", done: true, photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=160&q=80" },
        { time: "03:45 PM", name: "Greek Yogurt & Roasted Almonds Snack", macros: "20g Protein • 12g Carbs", kcal: "215 Kcal", done: false, photo: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=160&q=80" },
        { time: "07:00 PM", name: "Lean Herb Chicken Breast & Sweet Potato", macros: "45g Protein • 48g Carbs", kcal: "490 Kcal", done: false, photo: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=160&q=80" },
        { time: "09:30 PM", name: "Evening Stretching & Recovery Tea", macros: "Deep Sleep Support", kcal: "50 Kcal", done: false, photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=160&q=80" }
      ]
  },

  schedule: [
        { day: "Day 1", focus: "Abdominal & Stability Ball Core", mins: "45 mins", status: "Active Today", dayLink: 1, photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 2", focus: "HIIT Kettlebell & Lower Body Sculpt", mins: "50 mins", status: "Ready", dayLink: 2, photo: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 3", focus: "Dumbbell Thrusters & Balance", mins: "45 mins", status: "Ready", dayLink: 3, photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 4", focus: "Dynamic Core Flow & Mobility", mins: "40 mins", status: "Ready", dayLink: 4, photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 5", focus: "Active Recovery Yoga & Foam Roll", mins: "30 mins", status: "Upcoming", dayLink: 1, photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 6", focus: "Full Body Metabolic Circuit", mins: "55 mins", status: "Upcoming", dayLink: 2, photo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=140&q=80" },
        { day: "Day 7", focus: "Rest & Mindfulness Breathing", mins: "20 mins", status: "Upcoming", dayLink: 4, photo: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=140&q=80" }
      ],

  community: {
    feed: [
        { 
          name: "Maya S.", 
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
          action: "completed Day 1 Abdominal muscles & burned 290 Kcal!", 
          time: "4 mins ago • Studio Session", 
          cheers: 18 
        },
        { 
          name: "Liam K.", 
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=400&q=80",
          action: "set a new 90-second Plank Core Hold personal record 🔥", 
          time: "19 mins ago • Home Gym", 
          cheers: 24 
        },
        { 
          name: "Noah T.", 
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80",
          action: "finished Jumping on ball with 100% accuracy!", 
          time: "42 mins ago • Core Club", 
          cheers: 12 
        },
        { 
          name: "Chloe R.", 
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80",
          action: "unlocked the Beginner 1,200 XP Milestone Badge 🏆", 
          time: "1 hr ago • Strength Zone", 
          cheers: 31 
        },
        { 
          name: "Lucas V.", 
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
          action: "joined the 7-Day Stability Ball Core Challenge!", 
          time: "2 hrs ago • PulseFit Hub", 
          cheers: 9 
        },
        { 
          name: "Sofia M.", 
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80", 
          workoutPhoto: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
          action: "completed Day 3 Dumbbell Thruster Press!", 
          time: "3 hrs ago • Morning Flow", 
          cheers: 15 
        }
      ],
    leaderboard: [
        { rank: 1, name: "Chloe R.", score: 1340, level: "Beginner+", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&q=80" },
        { rank: 2, name: "Maya S.", score: 1285, level: "Beginner+", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&q=80" },
        { rank: 3, name: "Liam K.", score: 1150, level: "Beginner", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80" },
        { rank: 4, name: "You (Alex)", score: 1021, level: "Beginner", isMe: true, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80" },
        { rank: 5, name: "Noah T.", score: 980, level: "Beginner", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80" },
        { rank: 6, name: "Sofia M.", score: 945, level: "Beginner", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=140&q=80" },
        { rank: 7, name: "Lucas V.", score: 890, level: "Beginner", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=140&q=80" },
        { rank: 8, name: "Ethan B.", score: 860, level: "Beginner", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=140&q=80" },
        { rank: 9, name: "Hannah P.", score: 810, level: "Beginner", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=140&q=80" },
        { rank: 10, name: "Daniel W.", score: 775, level: "Beginner", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=140&q=80" }
      ]
  },

  analytics: {
    muscles: [
        { zone: "Upper & Lower Abdominals", pct: 92, color: "#F26430", pr: "45s Stability Ball Hold" },
        { zone: "Obliques & Transverse Core", pct: 84, color: "#8B6BF2", pr: "32 Russian Twists" },
        { zone: "Quadriceps & Glute Medius", pct: 78, color: "#63D471", pr: "15m Ball Bounce" },
        { zone: "Anterior & Lateral Deltoids", pct: 74, color: "#38BDF8", pr: "12kg Dumbbell Press" },
        { zone: "Hamstrings & Posterior Chain", pct: 68, color: "#F59E0B", pr: "20 Ball Curls" },
        { zone: "Thoracic & Hip Mobility", pct: 88, color: "#EC4899", pr: "Full Cobra Extension" }
      ],
    history: [
        { date: "Today • 09:30 AM", title: "Day 1 • Abdominal & Ball Routine", kcal: "290 Kcal", mins: "45 mins", photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=140&q=80" },
        { date: "Yesterday • 06:15 PM", title: "Core Mobility & Dumbbell Sculpt", kcal: "310 Kcal", mins: "48 mins", photo: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=140&q=80" },
        { date: "2 Days Ago", title: "Plyometric Jump & Swiss Ball", kcal: "340 Kcal", mins: "50 mins", photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=140&q=80" },
        { date: "3 Days Ago", title: "Beginner Foundation Assessment", kcal: "220 Kcal", mins: "35 mins", photo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=140&q=80" },
        { date: "5 Days Ago", title: "Full Body Stretch & Posture Flow", kcal: "180 Kcal", mins: "30 mins", photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=140&q=80" },
        { date: "6 Days Ago", title: "Stability Ball Core Ignition", kcal: "275 Kcal", mins: "42 mins", photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=140&q=80" }
      ],
    chart: {
      kcal: [
        { d: "Mon", v: 210, h: 62 }, { d: "Tue", v: 275, h: 80 },
        { d: "Wed", v: 190, h: 55 }, { d: "Thu", v: 290, h: 94, active: true },
        { d: "Fri", v: 240, h: 72 }, { d: "Sat", v: 165, h: 50 },
        { d: "Sun", v: 120, h: 36 }
      ],
      mins: [
        { d: "Mon", v: 35, h: 65 }, { d: "Tue", v: 45, h: 82 },
        { d: "Wed", v: 30, h: 55 }, { d: "Thu", v: 50, h: 92, active: true },
        { d: "Fri", v: 40, h: 74 }, { d: "Sat", v: 25, h: 48 },
        { d: "Sun", v: 20, h: 38 }
      ]
    }
  },

  settings: [
        { label: "Voice Countdown Cues", desc: "Play audio ticks during final 10 seconds", checked: true },
        { label: "Auto-Advance Next Exercise", desc: "Automatically load next movement after rest", checked: true },
        { label: "High-Contrast Form Guides", desc: "Show anatomical posture overlays on stage", checked: false },
        { label: "Friend Challenge Notifications", desc: "Allow real-time cheers from Beginner league", checked: true },
        { label: "Apple Health & Google Fit Sync", desc: "Sync heart rate & calorie burn automatically", checked: true },
        { label: "Rest Interval Duration", desc: "Default 15 seconds between exercises", checked: true }
      ],

  coach: {
    conversation: [
      { sender: "coach", text: "Hi Alex! Welcome to Day 1 of your Beginner Core & Stability program 👶. Notice how holding the teal stability ball activates your deep abdominal wall." },
      { sender: "user", text: "Should my lower back touch the floor during the Start point?" },
      { sender: "coach", text: "Great question! In Step 1 (kneeling forearm setup), keep a natural neutral spine. When you transition to the seated V-sit with the ball, tuck your pelvis slightly so your lower back stays supported without rounding." }
    ]
  }
};

// Expose for app.js (and for console tinkering when customising the template)
window.WORKOUT_DAYS = WORKOUT_DAYS;
window.PULSEFIT_DATA = PULSEFIT_DATA;

/**
 * PulseFit — Site/Brand Configuration
 * Single source of truth for identity + identity-driven defaults.
 */
const APP_CONFIG = {
  brandName: "PulseFit",
  tagline: "Interactive Workout & Fitness Dashboard",
  user: {
    name: "Alex Rivera",
    level: "Beginner",
    score: 1021,
    xpGoal: 1000,
    streakDays: 4,
    streakWeek: 1,
    hydrationStart: 1.8,
    hydrationTarget: 2.5,
    todayKcal: 290,
    sleep: "7h 45m"
  },
  trainer: {
    name: "Coach Elena",
    title: "Certified Core & Mobility Specialist",
    subtitle: "Ask anything about posture, breathing, or reps",
    avatar: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=180&q=80",
    status: "Online"
  },
  community: {
    friendsActive: 14,
    league: "Beginner League"
  }
};
window.APP_CONFIG = APP_CONFIG;

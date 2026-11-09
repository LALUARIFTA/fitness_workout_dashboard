# PulseFit — Fitness Workout Dashboard Template

Interactive fitness dashboard, restructured from a single HTML file into a reusable
frontend template. No build step: open `index.html` and it runs.

![Stack](https://img.shields.io/badge/stack-vanilla%20JS%20%2B%20Tailwind-F26430)

## Features

- 5 views: Overview · Workout Session · Community · Analytics · Coach Chat
- 4-day workout program with per-exercise step guides, timers and progress rings
- Web Audio UI sounds, heart-burst animations, vertical volume slider
- LocalStorage persistence (day, XP, hydration, volume)
- All content driven by `assets/js/data.js` + `assets/js/app.js`

## Folder structure

```
fitness_workout_dashboard/
├── index.html              # Page shell (markup only)
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS + animations
│   └── js/
│       ├── data.js         # APP_CONFIG, WORKOUT_DAYS, PULSEFIT_DATA
│       └── app.js          # Logic, rendering, audio, persistence
└── README.md
```

## Run

Serve it (optional) or just open the file:

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Customise

Edit `assets/js/data.js`:

- `APP_CONFIG` — brand name, user name/level/score, trainer, hydration target
- `WORKOUT_DAYS` — programs, exercises, steps, photos
- `PULSEFIT_DATA` — nutrition, schedule, community, analytics, settings, coach chat

Reset a visitor's saved state in the browser console:

```js
resetPulseFitState()
```

## Notes

- Tailwind is loaded from CDN; no build toolchain required.
- Images use Unsplash hotlinks. Replace with your own for production.
- To make the dashboard fully dynamic, point `PULSEFIT_DATA` at an API/CMS —
  the renderer expects the same shape.

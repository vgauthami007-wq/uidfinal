# 🔥 Habit Builder — UI Design Final Project

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/No_Framework-Pure_Vanilla-2ECC71?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge"/>
</p>

<p align="center">
  A polished, mobile-first <strong>Habit Tracking Web App</strong> built with pure HTML, CSS, and JavaScript — featuring an AI coach, dark mode, streak tracking, confetti celebrations, and persistent local storage
</p>

---

## 🌟 Highlights

- **5-screen SPA-like experience** — Login → Today → Habits → Stats → Settings
- **AI Coach panel** — personalized tips based on your active habits
- **Dark / Light mode** toggle that persists across sessions
- **Confetti animation** on habit completion 🎉
- **Streak tracking** — daily streaks per habit with emoji + colour customisation
- **Animated login page** — floating blobs, particles, rotating motivational quotes
- **Fully responsive** — designed mobile-first with a bottom nav bar

---

## 📱 Screens

| Screen | File | Description |
|--------|------|-------------|
| 🔐 Login | `index.html` | Animated login with rotating quotes, floating particles, forgot-password flow |
| 🏠 Today | `today.html` | Daily habit checklist, week scroll, progress bar, AI coach card, add/edit modals |
| 📋 Habits | `habits.html` | Full habit list with search bar and sort tabs (A–Z, Streak, Done) |
| 📊 Stats | `stats.html` | Completion charts and streak leaderboard across all habits |
| ⚙️ Settings | `settings.html` | Profile, theme toggle, and app preferences |

---

## 🗂️ Project Structure

```
uidfinal/
│
├── index.html          # Login page (entry point)
├── today.html          # Home / daily check-in
├── habits.html         # All habits list
├── stats.html          # Statistics & streaks
├── settings.html       # User settings
│
├── css/
│   ├── global.css      # Shared variables, resets, typography
│   ├── login.css       # Login-specific styles (blobs, card, form)
│   └── app.css         # App-wide styles (nav, cards, modals, dark mode)
│
└── js/
    ├── storage.js      # localStorage read/write helpers
    ├── habits.js       # Core habit data model & CRUD logic
    ├── habits-page.js  # Habits list page — search, sort, render
    ├── app.js          # Today page — check-in, progress, modals
    ├── ai.js           # AI Coach tip generation
    ├── theme.js        # Dark / light mode toggle & persistence
    ├── confetti.js     # Canvas-based confetti burst on completion
    ├── quotes.js       # Rotating motivational quotes on login
    ├── login.js        # Login & forgot-password flow
    └── particles.js    # Animated floating particles on login background
```

---

## ✨ Features In Detail

### 🏠 Today Screen
- **Week scroll strip** — tap any day to review that day's check-ins
- **Status card** — live completion percentage with animated progress bar
- **Habit cards** — emoji + custom colour, one-tap to mark done, long-press to edit
- **Add Habit modal** — name input, emoji picker grid, colour palette
- **Edit / Delete modal** — inline edit with delete confirmation
- **AI Coach** — context-aware tips based on your current habits
- **Confetti burst** on 100% daily completion 🎊

### 📋 Habits Screen
- **Live search** — filter habits by name as you type
- **Sort tabs** — sort by Name (A–Z), 🔥 Streak, or ✅ Completion rate
- **Per-habit stats** — streak count, total completions, best streak

### 🔐 Login Screen
- **Animated background** — three slow-moving gradient blobs
- **Floating particles** — canvas-based particle system
- **Rotating quotes** — carousel of motivational quotes with dot indicators
- **Password toggle** — show / hide password
- **Forgot password flow** — inline form swap with back navigation
- **Demo mode** — any email + 4+ character password grants access

### 🌙 Dark Mode
- System-aware CSS variables across all pages
- Toggle persisted to `localStorage` — your preference survives page reload

---

## 🚀 Getting Started

No build step, no npm, no dependencies. Just open and run.

```bash
# Clone the repository
git clone https://github.com/vgauthami007-wq/uidfinal.git
cd uidfinal

# Open in browser (any of the following)
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

Or drag `index.html` directly into your browser. Everything runs locally — no server needed.

> **Demo credentials:** any valid email address + password of 4+ characters.

---

## 🎨 Design Decisions

| Choice | Reason |
|--------|--------|
| **Nunito font** | Friendly, rounded — fits a wellness / self-improvement tone |
| **CSS custom properties** | Single source of truth for colours; dark mode is just a class swap |
| **Card-based layout** | Mobile-first; easy to scan at a glance |
| **Bottom navigation** | Thumb-friendly on phones; mirrors native app patterns |
| **LocalStorage** | Zero backend; works offline; instant reads |
| **Canvas confetti** | Purely visual delight — reinforces habit completion positively |

---

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, flexbox, grid, keyframe animations, backdrop-filter
- **Vanilla JavaScript (ES6+)** — modules, arrow functions, localStorage API, Canvas API
- **Google Fonts** — Nunito (loaded via `<link>`)

No React, no Vue, no Tailwind, no jQuery — 100% from scratch.

---

## 👩‍💻 Author

**Gauthami V** — [@vgauthami007-wq](https://github.com/vgauthami007-wq)  
Built as a UI Design final project at Amrita School of Engineering.

---

<p align="center">Made with 🔥 streaks and a lot of <code>localStorage.setItem()</code></p>

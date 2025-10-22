# 🎮 Product Hunt 3D: Room of ILMAN BAIHAQI

An immersive **2-level interactive game** combining 3D hidden-object hunting and frontend developer quiz challenges. Built with Next.js 14, React Three Fiber, and TailwindCSS.

---

## ✨ Features

### 🎯 Dual-Level Gameplay

- **Level 1: 3D Hidden Object Hunt** (60 seconds)
  - Find 10 target products in an immersive 3D room
  - Interactive camera controls (rotate, zoom)
  - Real-time scoring system
- **Level 2: Frontend Developer Quiz** (60 seconds)
  - Answer 10 multiple-choice questions (A, B, C, D)
  - Test your HTML, CSS, JavaScript, and React knowledge
  - Instant feedback with color-coded answers

### 🌟 Core Features

- 📱 **Cross-Platform** - Works on desktop and mobile
- 🎨 **3D Graphics** - Detailed product models with realistic lighting
- 🧠 **Educational Quiz** - Learn frontend development concepts
- 🌐 **Bilingual Support** - Switch between English and Indonesian instantly
- 🏆 **Persistent Leaderboard** - Top 10 players ranked by total score
- ⏱️ **Time-Based Challenge** - 60 seconds per level (120 seconds total)
- 💾 **Local Storage** - Scores saved across browser sessions
- 🎭 **Modern UI** - Beautiful animations with Framer Motion
- 📊 **Score Breakdown** - See your performance per level

---

## 🎲 How to Play

### Getting Started

1. **Enter your name** on the welcome screen
2. **Click "Start Game"** to begin Level 1

### Level 1: 3D Hidden Object Hunt 🔍

**Objective:** Find 10 hidden products in the 3D room before time runs out!

**Controls:**

- **Desktop:**
  - 🖱️ **Click** to select objects
  - 🔄 **Drag** to rotate camera
  - 🔍 **Scroll** to zoom in/out
- **Mobile:**
  - 👆 **Tap** to select objects
  - 🔄 **Swipe** to rotate camera
  - 🤏 **Pinch** to zoom in/out

**Scoring:**

- ✅ **Correct object:** +1 point, new target appears
- ❌ **Wrong object:** No points, try again
- 🎯 **Max score:** 10 points

**Objects to Find:**

1. 🎒 Red Bag
2. 📺 Television (on table)
3. ⌚ Gold Watch (on table)
4. 🍾 Green Bottle
5. 🎁 Purple Gift Box
6. 🕐 Wall Clock (on wall)
7. 🍊 Orange (on table)
8. 👕 Hanging Shirt
9. 💻 Laptop (on table)
10. 🟡 Yellow Ball

**Progression:**

- Complete all 10 objects **OR** survive 60 seconds → Advance to Level 2

### Level 2: Frontend Developer Quiz 🧠

**Objective:** Answer 10 multiple-choice questions correctly!

**How it Works:**

- Read the question carefully
- Select A, B, C, or D
- Instant visual feedback (green = correct, red = wrong)
- Auto-advance to next question after 1.5 seconds
- 60 seconds to answer all questions (6 seconds per question)

**Quiz Topics:**

- HTML fundamentals
- CSS properties & selectors
- JavaScript syntax & concepts
- Frontend frameworks (React, Vue, Angular)
- Web development standards (DOM, etc.)

**Scoring:**

- ✅ **Correct answer:** +1 point
- ❌ **Wrong answer:** 0 points
- 🎯 **Max score:** 10 points

**Progression:**

- Complete all 10 questions **OR** time runs out → Game ends

### Game Over 🏁

**Final Results:**

- **Total Score:** Level 1 + Level 2 (max 20 points)
- **Level Breakdown:** Individual scores displayed
- **Time Remaining:** Bonus points for quick completion

**Options:**

- 🎮 **Play Again** - Restart from Level 1
- 🏆 **View Leaderboard** - See top 10 players
- 📊 **Rankings** - Sorted by total score, then time

---

## 🛠️ Tech Stack

| Technology            | Purpose                     | Version  |
| --------------------- | --------------------------- | -------- |
| **Next.js**           | React framework             | 16.0.0   |
| **React**             | UI library                  | 19.2.0   |
| **Three.js**          | 3D graphics                 | 0.180.0  |
| **React Three Fiber** | React renderer for Three.js | 9.4.0    |
| **@react-three/drei** | Three.js helpers            | 10.7.6   |
| **Framer Motion**     | Animations                  | 12.23.24 |
| **TailwindCSS**       | Styling                     | 4.1.15   |
| **TypeScript**        | Type safety                 | 5.x      |

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Modern browser with WebGL support

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd game-3d

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start

# Build output in .next folder
```

### Linting

```bash
# Check code quality
npm run lint
```

---

## 📁 Project Structure

```
game-3d/
├── app/
│   ├── page.tsx           # Main game orchestrator
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── src/
│   ├── components/
│   │   ├── GameCanvas.tsx      # 3D Canvas wrapper (React.memo)
│   │   ├── RoomScene.tsx       # 3D room environment
│   │   ├── ProductItem.tsx     # Interactive 3D objects
│   │   ├── StartScreen.tsx     # Welcome & name input
│   │   ├── EndScreen.tsx       # Results with level breakdown
│   │   ├── Leaderboard.tsx     # Top 10 rankings
│   │   ├── UIOverlay.tsx       # Level 1 HUD
│   │   └── QuizScreen.tsx      # Level 2 quiz interface
│   ├── hooks/
│   │   └── useGameLogic.ts     # Game state management
│   ├── data/
│   │   └── quizQuestions.ts    # 10 quiz questions (bilingual)
│   └── locales/
│       ├── en.ts               # English translations
│       └── id.ts               # Indonesian translations
├── public/                     # Static assets
├── README.md                   # This file
├── LEVEL2_QUIZ.md             # Quiz documentation
├── GAME_DESIGN.md             # Design specifications
└── package.json               # Dependencies
```

---

## 🎮 Game Mechanics

### Scoring System

| Level       | Action         | Points | Max Score |
| ----------- | -------------- | ------ | --------- |
| **Level 1** | Correct object | +1     | 10        |
| **Level 1** | Wrong object   | 0      | -         |
| **Level 2** | Correct answer | +1     | 10        |
| **Level 2** | Wrong answer   | 0      | -         |
| **TOTAL**   | -              | -      | **20**    |

### Timer

- **Level 1:** 60 seconds
- **Level 2:** 60 seconds (reset after Level 1)
- **Total Game Time:** Up to 120 seconds
- **Visual Warning:** Red background when ≤ 10 seconds remaining

### Leaderboard

- **Storage:** Local browser storage (localStorage)
- **Capacity:** Top 10 players
- **Sorting:**
  1. Total score (descending)
  2. Time remaining (descending)
- **Persistence:** Survives browser refresh

---

## 🌐 Bilingual Support

### Language Toggle

- **Location:** Top-right corner
- **Languages:**
  - 🇬🇧 English (EN)
  - 🇮🇩 Indonesian (ID)
- **Coverage:**
  - UI labels and buttons
  - Game instructions
  - Product names
  - Quiz questions and answers
  - Feedback messages

### Switching Language

Click the flag button to instantly switch between English and Indonesian. No page reload required!

---

## 🎨 3D Environment Details

### Room Features

- **Dimensions:** 20×20 units floor space, 5 units height
- **Lighting:** Ambient + directional lights for realistic shadows
- **Camera:** Orbital controls with zoom limits (5-15 units)
- **Materials:** Lambert materials for optimal performance

### Color Scheme

| Element    | Color       | Hex Code |
| ---------- | ----------- | -------- |
| Floor      | Dark Brown  | #654321  |
| Ceiling    | Tan         | #d2b48c  |
| Back Wall  | Peach       | #ffdab9  |
| Left Wall  | Sky Blue    | #87ceeb  |
| Right Wall | Light Green | #98fb98  |
| Table      | Brown       | #8b4513  |
| Sofa       | Royal Blue  | #4169e1  |
| Lamp       | Gold        | #ffd700  |

### Furniture

1. **Wooden Table** - Center of room, holds 3 objects (watch, orange, laptop)
2. **Blue Sofa** - Left side of room
3. **Standing Lamp** - Right-back corner with golden glow
4. **Wooden Shelf** - Right wall, holds hanging shirt

### 3D Product Models

Each product features custom 3D geometry:

- **Red Bag** - Body, handle (torus), front pocket
- **Television** - Frame, glowing screen, stand, speakers
- **Gold Watch** - Circular face, crown, leather straps
- **Green Bottle** - Body, neck, cap (transparent glass)
- **Purple Box** - Gift box with pink ribbon
- **Wall Clock** - Round face, hour/minute/second hands, markers
- **Orange** - Sphere with stem and leaves
- **Hanging Shirt** - Hanger, body, sleeves, collar
- **Laptop** - Keyboard base, open screen, trackpad
- **Yellow Ball** - Sphere with horizontal black stripe

---

## 🧠 Quiz Questions

### Sample Questions

1. **What does HTML stand for?**

   - A. Hyper Text Markup Language ✓
   - B. High Tech Modern Language
   - C. Home Tool Markup Language
   - D. Hyperlinks and Text Markup Language

2. **Which CSS property changes text color?**

   - A. font-color
   - B. text-color
   - C. color ✓
   - D. text-style

3. **Which framework is developed by Facebook?**
   - A. Vue.js
   - B. Angular
   - C. React ✓
   - D. Svelte

_...and 7 more questions!_

See [LEVEL2_QUIZ.md](./LEVEL2_QUIZ.md) for complete quiz details.

---

## ⚙️ Customization

### Change Game Duration

Edit `src/hooks/useGameLogic.ts`:

```typescript
const GAME_DURATION = 90; // Change to 90 seconds per level
```

### Add Quiz Questions

Edit `src/data/quizQuestions.ts`:

```typescript
export const quizQuestions: QuizQuestion[] = [
  // ... existing questions
  {
    id: 11,
    question: 'What is TypeScript?',
    questionID: 'Apa itu TypeScript?',
    options: [
      'A JavaScript library',
      'A JavaScript superset', // Correct
      'A CSS framework',
      'A database',
    ],
    optionsID: [
      'Library JavaScript',
      'Superset dari JavaScript', // Correct
      'Framework CSS',
      'Database',
    ],
    correctAnswer: 1, // Index 0-3
  },
];
```

### Add New 3D Objects

1. **Define product** in `src/hooks/useGameLogic.ts`:

```typescript
const PRODUCTS: Omit<Product, 'position'>[] = [
  // ... existing products
  {
    id: 'newItem',
    name: 'newItem',
    color: '#hexcolor',
    size: [width, height, depth],
    type: 'box' | 'sphere' | 'cylinder',
  },
];
```

2. **Add position** in the same file:

```typescript
const positions: [number, number, number][] = [
  // ... existing positions
  [x, y, z], // newItem position
];
```

3. **Create 3D model** in `src/components/ProductItem.tsx`:

```typescript
case 'newItem':
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial {...materialProps} />
      </mesh>
    </group>
  );
```

4. **Add translations** in `src/locales/en.ts` and `src/locales/id.ts`:

```typescript
export const en = {
  // ... existing translations
  newItem: 'New Item Name',
};
```

### Modify Room Layout

Edit `src/components/RoomScene.tsx` to change:

- Wall colors
- Furniture positions
- Lighting intensity
- Floor/ceiling materials

---

## 🖥️ Browser Support

### Recommended Browsers

| Browser | Min Version | Notes               |
| ------- | ----------- | ------------------- |
| Chrome  | 90+         | ✅ Best performance |
| Firefox | 88+         | ✅ Full support     |
| Safari  | 14+         | ✅ Works well       |
| Edge    | 90+         | ✅ Chromium-based   |

### Requirements

- ✅ WebGL 2.0 support ([Test here](https://get.webgl.org/))
- ✅ JavaScript enabled
- ✅ localStorage enabled
- ✅ Modern GPU (integrated graphics OK)

### Known Issues

- **WebGL Context Loss:** If scene turns white, refresh browser (Ctrl+Shift+R)
- **Performance:** Lower-end devices may experience 30 FPS instead of 60 FPS
- **Mobile Safari:** May need touch twice on first interaction

---

## 🎨 Design System

### Typography

- **Font Family:** System fonts (Inter, Segoe UI, Roboto)
- **Headings:** Bold, 2xl-5xl sizes
- **Body Text:** Regular, base-lg sizes
- **Buttons:** Bold, lg-xl sizes

### Color Palette

| Usage     | Color  | Hex Code |
| --------- | ------ | -------- |
| Primary   | Indigo | #6366f1  |
| Secondary | Purple | #9333ea  |
| Success   | Green  | #22c55e  |
| Warning   | Orange | #f97316  |
| Danger    | Red    | #ef4444  |
| Level 1   | Blue   | #4169e1  |
| Level 2   | Pink   | #ec4899  |

### Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+

All components adapt to screen size with TailwindCSS responsive utilities.

---

## 🚀 Performance Optimization

### Implemented Optimizations

- ✅ **React.memo** on GameCanvas - Prevents unnecessary re-renders
- ✅ **Custom comparison function** - Optimized prop checking
- ✅ **Lambert materials** - Faster than Standard materials
- ✅ **Procedural geometry** - No external 3D model files
- ✅ **Lazy evaluation** - State initialized efficiently
- ✅ **Memoized callbacks** - Stable function references
- ✅ **WebGL context preservation** - Prevents context loss
- ✅ **No external assets** - All graphics generated in-browser

### Expected Performance

| Device  | Level 1 (3D) | Level 2 (Quiz) | Notes     |
| ------- | ------------ | -------------- | --------- |
| Desktop | 60 FPS       | 60 FPS         | Smooth    |
| Laptop  | 60 FPS       | 60 FPS         | Excellent |
| Tablet  | 45-60 FPS    | 60 FPS         | Good      |
| Phone   | 30-45 FPS    | 60 FPS         | Playable  |

---

## 🐛 Troubleshooting

### Scene Turns White

**Cause:** WebGL context loss  
**Solution:**

1. Hard refresh browser: `Ctrl + Shift + R`
2. Clear browser cache
3. Try incognito/private window
4. Restart dev server: `npm run dev`

### Build Errors

```bash
# Clean rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 3D Scene Not Loading

1. Check WebGL support: https://get.webgl.org/
2. Update GPU drivers
3. Disable browser extensions
4. Try different browser (Chrome recommended)

### Performance Issues

- Close other browser tabs
- Lower camera distance (zoom in)
- Disable browser hardware acceleration
- Use desktop for best experience

### Quiz Not Appearing

- Complete at least 1 object in Level 1
- Or wait for Level 1 timer to run out
- Check console (F12) for errors

---

## 📚 Documentation

- **[LEVEL2_QUIZ.md](./LEVEL2_QUIZ.md)** - Detailed quiz system documentation
- **[GAME_DESIGN.md](./GAME_DESIGN.md)** - Complete game design document
- **[SETUP.md](./SETUP.md)** - Development setup guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview

---

## 🎓 Learning Opportunities

This project demonstrates:

### Frontend Development

- ✅ Next.js 14 App Router
- ✅ React 19 features
- ✅ TypeScript strict mode
- ✅ Custom hooks pattern
- ✅ Component composition

### 3D Web Graphics

- ✅ React Three Fiber integration
- ✅ Three.js geometry & materials
- ✅ Camera controls (OrbitControls)
- ✅ Lighting & shadows
- ✅ Performance optimization

### State Management

- ✅ Complex game state handling
- ✅ Multi-level progression
- ✅ LocalStorage persistence
- ✅ Callback memoization

### UI/UX Design

- ✅ Responsive design
- ✅ Touch-friendly interfaces
- ✅ Smooth animations
- ✅ Accessibility considerations

---

## 🤝 Contributing

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Feature Ideas

- 🔊 **Sound Effects** - Background music, click sounds
- 🎚️ **Difficulty Levels** - Easy (90s), Medium (60s), Hard (30s)
- 🌍 **More Rooms** - Kitchen, bedroom, office, outdoor
- 🏅 **Achievement System** - Badges for milestones
- ☁️ **Online Leaderboard** - Cloud sync with Firebase
- 👥 **Multiplayer Mode** - Real-time competition
- 🎨 **Custom Themes** - Different room styles
- 📱 **Progressive Web App** - Installable on mobile
- 📊 **Statistics** - Track player progress over time

---

## 📄 License

**MIT License** - Feel free to use, modify, and distribute!

```
Copyright (c) 2025 ILMAN BAIHAQI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 Author

**ILMAN BAIHAQI**

Created with ❤️ using modern web technologies.

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Poimandres (pmnd.rs)** - React Three Fiber ecosystem
- **Tailwind Labs** - Utility-first CSS framework
- **Framer** - Motion animation library
- **Three.js Community** - 3D graphics foundation

---

## 📊 Project Stats

- **Total Lines of Code:** ~3,500+
- **Components:** 8
- **Hooks:** 1
- **Languages:** 2 (EN, ID)
- **3D Objects:** 10 products + 4 furniture pieces
- **Quiz Questions:** 10 (bilingual)
- **Build Time:** ~20 seconds
- **Bundle Size:** Optimized for production

---

## 🎯 Roadmap

### Version 1.0 (Current)

- ✅ Dual-level gameplay
- ✅ 3D object hunting
- ✅ Frontend quiz
- ✅ Bilingual support
- ✅ Local leaderboard

### Version 1.1 (Planned)

- ⏳ Sound effects
- ⏳ More quiz categories
- ⏳ Difficulty selection
- ⏳ Performance improvements

### Version 2.0 (Future)

- 🔮 Online leaderboard
- 🔮 Multiplayer mode
- 🔮 More rooms & levels
- 🔮 Achievement system

---

## 🎉 Getting Help

### Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Three Fiber:** https://docs.pmnd.rs/react-three-fiber
- **Three.js Docs:** https://threejs.org/docs
- **TailwindCSS:** https://tailwindcss.com/docs

### Common Questions

**Q: Can I deploy this to Vercel?**  
A: Yes! Just run `vercel deploy` or connect GitHub repo.

**Q: How do I add more levels?**  
A: Extend `GameState` type and add new level components.

**Q: Can I use this commercially?**  
A: Yes, MIT license allows commercial use.

**Q: How do I reset the leaderboard?**  
A: Open browser DevTools → Application → LocalStorage → Delete "leaderboard" key.

---

## 🌟 Showcase

**Perfect for:**

- 🎓 Learning Next.js + Three.js integration
- 🎮 Creating interactive web games
- 📚 Teaching frontend development
- 🎨 Demonstrating 3D web capabilities
- 💼 Portfolio projects

---

**Ready to play? Run `npm run dev` and enjoy!** 🎮✨

_Last Updated: October 22, 2025_

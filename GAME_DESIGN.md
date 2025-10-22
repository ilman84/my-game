# 🎮 Product Hunt 3D: Game Design Document

## Game Overview

**Title:** Product Hunt 3D: Room of ILMAN BAIHAQI  
**Genre:** 3D Hidden Object / Casual Puzzle  
**Platform:** Web (Desktop & Mobile)  
**Technology:** Next.js 14, React Three Fiber, Three.js

---

## Core Gameplay Loop

```
Start Screen → Enter Name → Game Start → Find Objects → Time Up/All Found → End Screen → Leaderboard → Replay
```

### Player Flow

1. **Welcome Screen**

   - Player enters their name
   - Views game instructions
   - Clicks "Start Game"

2. **Gameplay**

   - 60-second timer countdown
   - Find specific target product in 3D room
   - Click/tap objects to select them
   - Correct selection → +1 score, new target
   - Wrong selection → shake animation
   - Rotate camera to explore room

3. **End Screen**

   - Display final score and remaining time
   - Option to replay or view leaderboard
   - Score automatically saved to leaderboard

4. **Leaderboard**
   - Top 10 players
   - Sorted by score, then time
   - Persistent across sessions

---

## Game Mechanics

### Scoring System

| Action         | Points | Notes                    |
| -------------- | ------ | ------------------------ |
| Correct object | +1     | New target appears       |
| Wrong object   | 0      | Shake animation          |
| Time bonus     | -      | Displayed on leaderboard |

### Timer

- **Duration:** 60 seconds
- **Visual Warning:** Red background when ≤ 10 seconds
- **End Condition:** Timer reaches 0 OR all objects found

### Objects

Each game session includes 5 product types:

1. **Red Bag** 🎒

   - Color: #dc2626
   - Shape: Box
   - Size: 0.8 × 1.2 × 0.4

2. **Blue Sneaker** 👟

   - Color: #2563eb
   - Shape: Box
   - Size: 1.0 × 0.5 × 0.6

3. **Gold Watch** ⌚

   - Color: #eab308
   - Shape: Cylinder
   - Size: 0.3 diameter × 0.3 height

4. **Green Bottle** 🍾

   - Color: #16a34a
   - Shape: Cylinder
   - Size: 0.3 diameter × 1.0 height

5. **Purple Box** 📦
   - Color: #9333ea
   - Shape: Box
   - Size: 0.7 × 0.7 × 0.7

---

## 3D Environment

### Room Layout

- **Dimensions:** 20 × 20 units
- **Height:** 5 units
- **Floor:** Wooden texture (#8b7355)
- **Walls:** Light gray (#e5e7eb, #f3f4f6)

### Furniture

1. **Table**

   - Position: Center-back
   - Material: Wood
   - Includes 4 legs

2. **Sofa**

   - Position: Left side
   - Color: Blue (#1e3a8a)
   - 2-seat design

3. **Lamp**

   - Position: Right-back corner
   - Light source
   - Yellow glow effect

4. **Shelf**
   - Position: Right wall
   - Brown wood material

### Lighting

- **Ambient Light:** 0.6 intensity (overall illumination)
- **Directional Light:** Top-right, shadows enabled
- **Point Light:** Lamp (decorative)
- **Point Lights:** Product spotlights (when target)

### Camera

- **Initial Position:** [0, 5, 10]
- **Field of View:** 60°
- **Controls:** OrbitControls (rotate, zoom, pan)
- **Restrictions:**
  - Min distance: 5 units
  - Max distance: 15 units
  - Max polar angle: 90° (can't go underground)

---

## User Interface

### Start Screen

```
┌─────────────────────────┐
│   PRODUCT HUNT 3D       │
│  Room of ILMAN BAIHAQI  │
│                         │
│  [Name Input Field]     │
│                         │
│  [START GAME 🚀]        │
└─────────────────────────┘
```

### Game HUD

```
┌──────────────────────────────┐
│ Score: X        Time: XXs    │
└──────────────────────────────┘
        3D CANVAS
┌──────────────────────────────┐
│  Find the: ⭐ TARGET ⭐      │
└──────────────────────────────┘
```

### End Screen

```
┌─────────────────────────┐
│         🎉              │
│      YOU WIN!           │
│                         │
│   Score: X              │
│   Time Left: Xs         │
│                         │
│  [PLAY AGAIN 🎮]        │
│  [LEADERBOARD 🏆]       │
└─────────────────────────┘
```

### Leaderboard

```
┌─────────────────────────────┐
│    🏆 LEADERBOARD           │
│                             │
│ 🥇 Player 1   Score: 5  3s  │
│ 🥈 Player 2   Score: 4  2s  │
│ 🥉 Player 3   Score: 3  1s  │
│ 4  Player 4   Score: 2  0s  │
│                             │
│  [BACK TO GAME]             │
└─────────────────────────────┘
```

---

## Controls

### Desktop

| Input                  | Action        |
| ---------------------- | ------------- |
| Left Click             | Select object |
| Left Click + Drag      | Rotate camera |
| Mouse Wheel            | Zoom in/out   |
| Right Click (disabled) | -             |

### Mobile

| Input            | Action        |
| ---------------- | ------------- |
| Tap              | Select object |
| One-finger swipe | Rotate camera |
| Two-finger pinch | Zoom in/out   |
| Two-finger drag  | Pan camera    |

---

## Localization

### Supported Languages

1. **English (EN)** 🇬🇧
2. **Indonesian (ID)** 🇮🇩

### Translation Keys

- Game title and subtitle
- UI buttons (Start, Play Again, etc.)
- Game instructions
- Product names
- Score and time labels
- Feedback messages (Correct/Wrong)

### Language Toggle

- Position: Top-right corner
- Format: Flag + Language Code
- Instant update (no page reload)
- Preference saved in state (not persisted)

---

## Visual Design

### Color Palette

| Element    | Color    | Hex Code |
| ---------- | -------- | -------- |
| Primary    | Indigo   | #6366f1  |
| Secondary  | Purple   | #9333ea  |
| Success    | Green    | #22c55e  |
| Warning    | Orange   | #f97316  |
| Danger     | Red      | #ef4444  |
| Background | Sky Blue | #38bdf8  |
| Text       | Gray     | #1f2937  |

### Typography

- **Font:** System font stack (Inter, Segoe UI, Roboto)
- **Headings:** Bold, 2-4xl
- **Body:** Regular, base-lg
- **Buttons:** Bold, lg-xl

### Animations

1. **Screen Transitions**

   - Fade in/out
   - Scale spring effect
   - Stagger children

2. **Game Feedback**

   - Correct: Checkmark + fade out
   - Wrong: Shake animation
   - Found object: Bounce + transparency

3. **UI Elements**
   - Button hover: Scale 1.05
   - Button active: Scale 0.95
   - Timer warning: Pulse animation

---

## Technical Architecture

### Component Structure

```
App (page.tsx)
├── Language Toggle
├── GameCanvas
│   └── RoomScene
│       ├── Lighting
│       ├── Environment
│       ├── Furniture
│       └── ProductItems
├── StartScreen
├── EndScreen
├── Leaderboard
└── UIOverlay
```

### State Management

**Game Logic Hook (useGameLogic)**

```typescript
State:
- gameState: "start" | "playing" | "end"
- playerName: string
- score: number
- timeLeft: number
- products: Product[]
- targetProduct: Product | null
- foundProducts: Set<string>

Actions:
- startGame(name)
- handleProductClick(id)
- saveToLeaderboard()
- getLeaderboard()
- resetGame()
```

### Data Persistence

**LocalStorage Schema**

```json
{
  "leaderboard": [
    {
      "name": "Player Name",
      "score": 5,
      "timeLeft": 15,
      "date": 1234567890
    }
  ]
}
```

---

## Performance Optimization

### 3D Scene

- Object pooling (products repositioned, not recreated)
- Efficient lighting (limited point lights)
- Low-poly furniture models
- Texture compression

### React

- Dynamic import for 3D canvas (SSR disabled)
- Memoized callbacks
- Minimal re-renders
- Efficient state updates

### Assets

- No external 3D models (procedural geometry)
- CSS gradients instead of images
- System fonts (no web fonts)

---

## Accessibility

- High contrast colors
- Large touch targets (48px+)
- Keyboard navigation support
- Screen reader friendly labels
- Reduced motion support

---

## Future Enhancements

### Potential Features

1. **Difficulty Levels**

   - Easy: 90 seconds, 3 objects
   - Medium: 60 seconds, 5 objects
   - Hard: 30 seconds, 7 objects

2. **Sound Effects**

   - Background music
   - Correct/wrong sound
   - Timer warning beep

3. **Power-ups**

   - Time freeze (+10 seconds)
   - Object highlight
   - Score multiplier

4. **Multiplayer**

   - Online leaderboard
   - Real-time competition
   - Social sharing

5. **More Rooms**

   - Bedroom
   - Kitchen
   - Office
   - Outdoor

6. **Achievements**
   - Speed runner (all objects < 30s)
   - Perfect game (no wrong clicks)
   - Streak master (3 games in a row)

---

## Credits

**Created by:** ILMAN BAIHAQI  
**Built with:** Next.js 14, React Three Fiber, TailwindCSS  
**License:** MIT

---

**Have fun! 🎮🎉**

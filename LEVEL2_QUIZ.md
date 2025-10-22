# 🧠 Level 2: Frontend Developer Quiz

## Overview

Level 2 is a **quiz challenge** that tests your frontend development knowledge with 10 multiple-choice questions.

## Game Flow

```
Level 1 (3D Hunt) → Level 2 (Quiz) → End Screen
```

### Transition Conditions

**From Level 1 to Level 2:**

- ✅ Find all 10 objects (auto-advance)
- ✅ OR Timer runs out (60 seconds)

**From Level 2 to End Screen:**

- ✅ Answer all 10 questions (auto-advance)
- ✅ OR Timer runs out (60 seconds)

## Quiz Details

### Timer

- **Duration:** 60 seconds
- **Visual Warning:** Red background when ≤ 10 seconds
- **Countdown:** Continuous display at top of screen

### Questions

- **Total:** 10 questions
- **Format:** Multiple choice (A, B, C, D)
- **Topics:** HTML, CSS, JavaScript, React, DOM
- **Difficulty:** Easy to Medium
- **Language:** Bilingual (English & Indonesian)

### Scoring

- ✅ **Correct Answer:** +1 point
- ❌ **Wrong Answer:** 0 points, auto-advance to next question
- 📊 **Max Score:** 10 points

### UI Features

- Question counter (e.g., "1 / 10")
- Current score display
- Timer countdown
- Progress bar
- Visual feedback:
  - ✓ Green for correct
  - ✗ Red for wrong
- Auto-advance after 1.5 seconds

## Sample Questions

1. **What does HTML stand for?**

   - A. Hyper Text Markup Language ✓
   - B. High Tech Modern Language
   - C. Home Tool Markup Language
   - D. Hyperlinks and Text Markup Language

2. **Which CSS property is used to change text color?**

   - A. font-color
   - B. text-color
   - C. color ✓
   - D. text-style

3. **Which JavaScript framework is developed by Facebook?**
   - A. Vue.js
   - B. Angular
   - C. React ✓
   - D. Svelte

_...and 7 more questions!_

## Quiz Data Structure

```typescript
type QuizQuestion = {
  id: number;
  question: string; // English
  questionID: string; // Indonesian
  options: string[]; // English options
  optionsID: string[]; // Indonesian options
  correctAnswer: number; // Index 0-3 (A-D)
};
```

## Customization

### Add More Questions

Edit `src/data/quizQuestions.ts`:

```typescript
export const quizQuestions: QuizQuestion[] = [
  // ... existing questions
  {
    id: 11,
    question: 'Your new question?',
    questionID: 'Pertanyaan baru Anda?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    optionsID: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'],
    correctAnswer: 0, // Index of correct answer (0-3)
  },
];
```

### Change Quiz Duration

Edit `src/components/QuizScreen.tsx`:

```typescript
const QUIZ_DURATION = 90; // Change to 90 seconds
```

### Change Difficulty

- **Easy:** Basic HTML/CSS questions
- **Medium:** JavaScript, frameworks
- **Hard:** Advanced concepts, algorithms

## Final Score Calculation

```
Total Score = Level 1 Score + Level 2 Score
Max Total Score = 10 + 10 = 20 points
```

### Leaderboard Ranking

Sorted by:

1. **Total Score** (descending)
2. **Time Left** (descending)

## Component Structure

```
QuizScreen.tsx
├── Header
│   ├── Question Counter (1/10)
│   ├── Current Score
│   └── Timer
├── Question Card
│   ├── Question Text
│   └── 4 Option Buttons (A, B, C, D)
└── Progress Bar
```

## Bilingual Support

All questions and options available in:

- 🇬🇧 **English**
- 🇮🇩 **Indonesian**

Language switches automatically based on user preference.

## UX Features

### Visual Feedback

- ✅ **Correct:** Button turns green, shows checkmark
- ❌ **Wrong:** Button turns red, shows X mark
- ⏩ **Auto-advance** after 1.5 seconds

### Accessibility

- Large touch targets (min 48px)
- High contrast colors
- Clear typography
- Disabled buttons after selection

### Responsive Design

- Mobile-first layout
- Adapts to all screen sizes
- Touch-friendly on mobile
- Optimized for both portrait & landscape

## Example Flow

```
Start Screen
    ↓
Level 1: Find 10 objects (Score: 7/10)
    ↓ (60s or all found)
Level 2: Answer 10 questions (Score: 8/10)
    ↓ (60s or all answered)
End Screen
    - Level 1: 7 points
    - Level 2: 8 points
    - Total: 15 points
    ↓
Leaderboard (Ranked by total score)
```

## Tips for Players

### Level 1 Tips

- Rotate camera to see all angles
- Objects can be on table, walls, floor, or shelves
- No penalty for wrong clicks (but time keeps running!)

### Level 2 Tips

- Read questions carefully
- Take your time (60 seconds for 10 questions = 6 seconds each)
- No penalty for wrong answers
- Questions in your selected language

## Technical Implementation

### State Management

```typescript
const [gameState, setGameState] = useState<GameState>(
  'start' | 'level1' | 'level2' | 'end'
);
const [level1Score, setLevel1Score] = useState(0);
const [level2Score, setLevel2Score] = useState(0);
const totalScore = level1Score + level2Score;
```

### Quiz Logic

```typescript
const handleAnswerClick = (answerIndex: number) => {
  // Check if correct
  const isCorrect = answerIndex === currentQuestion.correctAnswer;

  // Update score
  if (isCorrect) setScore((prev) => prev + 1);

  // Show feedback (1.5s)
  // Auto-advance to next question
  // Or complete quiz if last question
};
```

## Performance

- Lightweight (no images for quiz)
- Instant transitions
- Smooth animations
- No loading between questions

---

**Challenge yourself with both 3D skills and frontend knowledge! 🎮🧠**

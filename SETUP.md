# 🚀 Quick Setup Guide

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
game-3d/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main game page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── GameCanvas.tsx
│   │   ├── RoomScene.tsx
│   │   ├── ProductItem.tsx
│   │   ├── StartScreen.tsx
│   │   ├── EndScreen.tsx
│   │   ├── Leaderboard.tsx
│   │   └── UIOverlay.tsx
│   ├── hooks/
│   │   └── useGameLogic.ts
│   └── locales/
│       ├── en.ts          # English translations
│       └── id.ts          # Indonesian translations
└── public/                # Static assets
```

## Key Features

### Game Controls

**Desktop:**

- 🖱️ Click to select objects
- 🔄 Drag to rotate camera
- 🔍 Scroll to zoom

**Mobile:**

- 👆 Tap to select objects
- 🔄 Swipe to rotate camera
- 🤏 Pinch to zoom

### Language Support

Click the language toggle button (top-right) to switch between:

- 🇬🇧 English (EN)
- 🇮🇩 Indonesian (ID)

### Game Objects

The game includes 5 different product types:

1. 🎒 Red Bag
2. 👟 Blue Sneaker
3. ⌚ Gold Watch
4. 🍾 Green Bottle
5. 📦 Purple Box

## Customization

### Change Game Duration

Edit `src/hooks/useGameLogic.ts`:

```typescript
const GAME_DURATION = 60; // Change to desired seconds
```

### Add More Products

Edit `src/hooks/useGameLogic.ts`:

```typescript
const PRODUCTS: Omit<Product, 'position'>[] = [
  {
    id: 'newProduct',
    name: 'newProduct',
    color: '#hex',
    size: [x, y, z],
    type: 'box',
  },
  // ... add more
];
```

Then add translations in `src/locales/en.ts` and `src/locales/id.ts`:

```typescript
export const en = {
  // ...
  newProduct: 'New Product Name',
};
```

### Modify Room Layout

Edit `src/components/RoomScene.tsx` to change:

- Lighting
- Furniture placement
- Wall colors
- Floor textures

## Troubleshooting

### Build Errors

If you encounter module resolution errors:

```bash
rm -rf .next node_modules
npm install
npm run build
```

### 3D Scene Not Loading

- Check browser WebGL support: [https://get.webgl.org/](https://get.webgl.org/)
- Try disabling browser extensions
- Use latest Chrome/Firefox/Safari

### Performance Issues

- Close other browser tabs
- Reduce camera distance (zoom in)
- Use a more powerful device

## Browser Requirements

- Modern browser with WebGL 2.0 support
- JavaScript enabled
- localStorage enabled (for leaderboard)
- Recommended: Chrome 90+, Firefox 88+, Safari 14+

## Development Tips

### Hot Reload

The dev server supports hot module replacement - changes to components will update live without refreshing the page.

### Debug Mode

Open browser DevTools (F12) to see:

- Console logs
- React component tree (React DevTools extension)
- Three.js scene stats

### Testing Mobile

Use Chrome DevTools Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M) to simulate mobile devices.

## License

MIT License - Feel free to use and modify!

---

**Have fun playing and coding! 🎮✨**

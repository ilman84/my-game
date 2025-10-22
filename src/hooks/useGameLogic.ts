import { useState, useEffect, useCallback } from 'react';

export type Product = {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  size: [number, number, number];
  type: 'box' | 'sphere' | 'cylinder';
};

export type GameState = 'start' | 'level1' | 'level2' | 'end';

export type LeaderboardEntry = {
  name: string;
  score: number;
  timeLeft: number;
  date: number;
};

const GAME_DURATION = 60;

const PRODUCTS: Omit<Product, 'position'>[] = [
  {
    id: 'redBag',
    name: 'redBag',
    color: '#dc2626',
    size: [0.8, 1.2, 0.4],
    type: 'box',
  },
  {
    id: 'television',
    name: 'television',
    color: '#1f2937',
    size: [0.8, 0.5, 0.1],
    type: 'box',
  },
  {
    id: 'goldWatch',
    name: 'goldWatch',
    color: '#eab308',
    size: [0.3, 0.3, 0.3],
    type: 'cylinder',
  },
  {
    id: 'greenBottle',
    name: 'greenBottle',
    color: '#16a34a',
    size: [0.3, 1, 0.3],
    type: 'cylinder',
  },
  {
    id: 'purpleBox',
    name: 'purpleBox',
    color: '#9333ea',
    size: [0.7, 0.7, 0.7],
    type: 'box',
  },
  {
    id: 'wallClock',
    name: 'wallClock',
    color: '#ffffff',
    size: [0.5, 0.5, 0.1],
    type: 'cylinder',
  },
  {
    id: 'orangeFruit',
    name: 'orangeFruit',
    color: '#ff8c00',
    size: [0.12, 0.12, 0.12],
    type: 'sphere',
  },
  {
    id: 'hangingShirt',
    name: 'hangingShirt',
    color: '#ff69b4',
    size: [0.5, 0.7, 0.1],
    type: 'box',
  },
  {
    id: 'laptop',
    name: 'laptop',
    color: '#374151',
    size: [0.6, 0.4, 0.02],
    type: 'box',
  },
  {
    id: 'yellowBall',
    name: 'yellowBall',
    color: '#ffd700',
    size: [0.25, 0.25, 0.25],
    type: 'sphere',
  },
];

// Randomize positions for products
const randomizePositions = (): Product[] => {
  const positions: [number, number, number][] = [
    [3, 0.6, 2], // redBag - di lantai
    [-1.2, 0.75, -2], // television - di kiri meja
    [0, 0.65, -2], // goldWatch - di atas meja tengah
    [-2, 0.5, 3], // greenBottle - di lantai
    [4, 0.8, -1], // purpleBox - di lantai
    [0, 3.5, -4.85], // wallClock - di dinding belakang
    [1, 0.55, -2], // orangeFruit - di atas meja kanan
    [5, 2, 0.2], // hangingShirt - di depan rak
    [1.2, 0.55, -2.3], // laptop - di atas meja kanan
    [6.2, 0.25, 0], // yellowBall - di samping rak
  ];

  return PRODUCTS.map((product, index) => ({
    ...product,
    position: positions[index],
  }));
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [playerName, setPlayerName] = useState('');
  const [level1Score, setLevel1Score] = useState(0);
  const [level2Score, setLevel2Score] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [foundProducts, setFoundProducts] = useState<Set<string>>(new Set());

  // Products state
  const [products, setProducts] = useState<Product[]>(() => {
    return randomizePositions();
  });

  // Target product - memoized based on products
  const [targetProduct, setTargetProduct] = useState<Product | null>(() => {
    const initial = randomizePositions();
    return initial.length > 0 ? initial[0] : null; // Just use first for now
  });

  // Timer untuk Level 1
  useEffect(() => {
    if (gameState !== 'level1') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = Math.max(0, prev - 1);
        if (newTime === 0) {
          // Waktu habis di level 1, langsung ke level 2
          setGameState('level2');
          setTimeLeft(GAME_DURATION); // Reset timer untuk level 2
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  const startGame = useCallback((name: string) => {
    if (!name.trim()) {
      alert('Please enter your name!');
      return;
    }
    setPlayerName(name);
    setLevel1Score(0);
    setLevel2Score(0);
    setTimeLeft(GAME_DURATION);
    setFoundProducts(new Set());

    // Randomize products - PENTING: gunakan array yang sama
    const newProducts = randomizePositions();
    setProducts(newProducts);

    // Set target dari array products yang SAMA
    if (newProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * newProducts.length);
      setTargetProduct(newProducts[randomIndex]);
    }

    // Set state terakhir agar render benar
    setGameState('level1');
  }, []);

  const handleProductClick = useCallback(
    (productId: string) => {
      if (gameState !== 'level1')
        return { correct: false, alreadyFound: false };

      const alreadyFound = foundProducts.has(productId);
      if (alreadyFound) return { correct: false, alreadyFound: true };

      const isCorrect = productId === targetProduct?.id;

      if (isCorrect) {
        setLevel1Score((prev) => prev + 1);
        setFoundProducts((prev) => new Set([...prev, productId]));

        // Select new target from remaining products
        const remainingProducts = products.filter(
          (p) => !foundProducts.has(p.id) && p.id !== productId
        );
        if (remainingProducts.length > 0) {
          const newTarget =
            remainingProducts[
              Math.floor(Math.random() * remainingProducts.length)
            ];
          setTargetProduct(newTarget);
        } else {
          // All products found - pindah ke level 2
          setGameState('level2');
          setTimeLeft(GAME_DURATION); // Reset timer untuk level 2
        }
      }

      return { correct: isCorrect, alreadyFound: false };
    },
    [gameState, targetProduct, products, foundProducts]
  );

  const completeQuiz = useCallback(
    (quizScore: number, quizTimeLeft: number) => {
      setLevel2Score(quizScore);
      setTimeLeft(quizTimeLeft);
      setGameState('end');
    },
    []
  );

  const saveToLeaderboard = useCallback(() => {
    if (!playerName) return;

    const totalScore = level1Score + level2Score;

    const entry: LeaderboardEntry = {
      name: playerName,
      score: totalScore,
      timeLeft,
      date: Date.now(),
    };

    const existingData = localStorage.getItem('leaderboard');
    const leaderboard: LeaderboardEntry[] = existingData
      ? JSON.parse(existingData)
      : [];
    leaderboard.push(entry);

    // Sort by score (desc) then by timeLeft (desc)
    leaderboard.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.timeLeft - a.timeLeft;
    });

    // Keep top 10
    const top10 = leaderboard.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(top10));
  }, [playerName, level1Score, level2Score, timeLeft]);

  const getLeaderboard = useCallback((): LeaderboardEntry[] => {
    const data = localStorage.getItem('leaderboard');
    return data ? JSON.parse(data) : [];
  }, []);

  const resetGame = useCallback(() => {
    setGameState('start');
    setLevel1Score(0);
    setLevel2Score(0);
    setTimeLeft(GAME_DURATION);
    setFoundProducts(new Set());
    setPlayerName('');

    const newProducts = randomizePositions();
    setProducts(newProducts);
    const randomTarget =
      newProducts[Math.floor(Math.random() * newProducts.length)];
    setTargetProduct(randomTarget);
  }, []);

  return {
    gameState,
    level1Score,
    level2Score,
    totalScore: level1Score + level2Score,
    timeLeft,
    products,
    targetProduct,
    foundProducts,
    startGame,
    handleProductClick,
    completeQuiz,
    saveToLeaderboard,
    getLeaderboard,
    resetGame,
  };
};

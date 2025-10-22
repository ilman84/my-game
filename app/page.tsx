'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGameLogic } from '@/hooks/useGameLogic';
import { en } from '@/locales/en';
import { id } from '@/locales/id';
import { quizQuestions } from '@/data/quizQuestions';
import StartScreen from '@/components/StartScreen';
import EndScreen from '@/components/EndScreen';
import Leaderboard from '@/components/Leaderboard';
import UIOverlay from '@/components/UIOverlay';
import QuizScreen from '@/components/QuizScreen';

// Import GameCanvas statically - no dynamic import to prevent remount
import GameCanvas from '@/components/GameCanvas';

type Language = 'en' | 'id';
type Screen = 'game' | 'leaderboard';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [screen, setScreen] = useState<Screen>('game');
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  const {
    gameState,
    level1Score,
    level2Score,
    totalScore,
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
  } = useGameLogic();

  const translations = language === 'en' ? en : id;

  const handleProductClickWithFeedback = useCallback(
    (id: string) => {
      const result = handleProductClick(id);

      if (result.alreadyFound) return result;

      // Simplified feedback - no state update that causes re-render
      if (result.correct) {
        console.log('✅ Correct!');
      } else {
        console.log('❌ Wrong!');
      }

      return result;
    },
    [handleProductClick]
  );

  const handleViewLeaderboard = useCallback(() => {
    setScreen('leaderboard');
  }, []);

  const handleBackToGame = useCallback(() => {
    setScreen('game');
    resetGame();
  }, [resetGame]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <main className='relative h-screen w-full overflow-hidden'>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className='fixed right-4 top-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-lg transition-all hover:scale-110 hover:bg-indigo-50 active:scale-95 sm:right-6 sm:top-6 sm:px-6 sm:py-3 sm:text-base'
      >
        {language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
      </button>

      {/* 3D Canvas - Mount once on first level1, never unmount */}
      {(gameState === 'level1' || canvasLoaded) && (
        <div
          style={{
            display: gameState === 'level1' ? 'block' : 'none',
            width: '100%',
            height: '100vh',
          }}
          onLoad={() => setCanvasLoaded(true)}
        >
          <GameCanvas
            products={products}
            targetProduct={targetProduct}
            foundProducts={foundProducts}
            onProductClick={handleProductClickWithFeedback}
          />
        </div>
      )}

      {/* UI Overlay for Level 1 */}
      {gameState === 'level1' && (
        <>
          <UIOverlay
            score={level1Score}
            timeLeft={timeLeft}
            targetProductName={targetProduct?.name || ''}
            translations={translations}
            feedback={null}
          />
          {/* Level indicator */}
          <div className='pointer-events-none fixed left-4 top-4 z-10 rounded-2xl bg-indigo-600 px-6 py-3 shadow-lg sm:left-6 sm:top-6'>
            <div className='text-sm font-bold text-white'>LEVEL 1</div>
            <div className='text-xs text-indigo-200'>3D Hunt</div>
          </div>
        </>
      )}

      {/* Level 2 - Quiz */}
      {gameState === 'level2' && screen === 'game' && (
        <QuizScreen
          questions={quizQuestions}
          onQuizComplete={completeQuiz}
          translations={translations}
          language={language}
        />
      )}

      {/* Background for non-playing states */}
      {gameState !== 'level1' && gameState !== 'level2' && (
        <div className='absolute inset-0 bg-linear-to-br from-sky-200 to-indigo-400' />
      )}

      {/* Screens */}
      <AnimatePresence mode='wait'>
        {gameState === 'start' && screen === 'game' && (
          <StartScreen
            key='start'
            onStart={startGame}
            translations={translations}
          />
        )}

        {gameState === 'end' && screen === 'game' && (
          <EndScreen
            key='end'
            score={totalScore}
            level1Score={level1Score}
            level2Score={level2Score}
            timeLeft={timeLeft}
            onPlayAgain={resetGame}
            onViewLeaderboard={handleViewLeaderboard}
            translations={translations}
            saveToLeaderboard={saveToLeaderboard}
          />
        )}

        {screen === 'leaderboard' && (
          <Leaderboard
            key='leaderboard'
            entries={getLeaderboard()}
            onClose={handleBackToGame}
            translations={translations}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

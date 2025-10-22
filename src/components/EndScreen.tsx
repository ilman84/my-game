'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Translations } from '@/locales/en';

type EndScreenProps = {
  score: number;
  level1Score: number;
  level2Score: number;
  timeLeft: number;
  onPlayAgain: () => void;
  onViewLeaderboard: () => void;
  translations: Translations;
  saveToLeaderboard: () => void;
};

export default function EndScreen({
  score,
  level1Score,
  level2Score,
  timeLeft,
  onPlayAgain,
  onViewLeaderboard,
  translations,
  saveToLeaderboard,
}: EndScreenProps) {
  useEffect(() => {
    saveToLeaderboard();
  }, [saveToLeaderboard]);

  const isWin = score > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-12'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 10 }}
          className='mb-6 text-center'
        >
          <div className='mb-4 text-6xl'>{isWin ? '🎉' : '⏰'}</div>
          <h2
            className={`text-4xl font-bold ${
              isWin ? 'text-green-600' : 'text-orange-600'
            }`}
          >
            {isWin ? translations.win : translations.lose}
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-8 space-y-4'
        >
          {/* Total Score */}
          <div className='rounded-2xl bg-linear-to-r from-indigo-50 to-purple-50 p-6'>
            <div className='flex items-center justify-between'>
              <span className='text-lg font-medium text-gray-700'>
                Total {translations.score}:
              </span>
              <span className='text-4xl font-bold text-indigo-600'>
                {score}
              </span>
            </div>
          </div>

          {/* Level Breakdown */}
          <div className='grid grid-cols-2 gap-3'>
            <div className='rounded-xl bg-blue-50 p-4'>
              <div className='text-sm font-medium text-gray-600'>
                Level 1: 3D Hunt
              </div>
              <div className='text-2xl font-bold text-blue-600'>
                {level1Score}
              </div>
            </div>
            <div className='rounded-xl bg-pink-50 p-4'>
              <div className='text-sm font-medium text-gray-600'>
                Level 2: Quiz
              </div>
              <div className='text-2xl font-bold text-pink-600'>
                {level2Score}
              </div>
            </div>
          </div>

          <div className='rounded-2xl bg-linear-to-r from-sky-50 to-indigo-50 p-6'>
            <div className='flex items-center justify-between'>
              <span className='text-lg font-medium text-gray-700'>
                {translations.timeLeft}:
              </span>
              <span className='text-3xl font-bold text-sky-600'>
                {timeLeft}
                <span className='text-lg'> {translations.seconds}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='space-y-3'
        >
          <button
            onClick={onPlayAgain}
            className='w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl active:scale-95'
          >
            {translations.playAgain} 🎮
          </button>

          <button
            onClick={onViewLeaderboard}
            className='w-full rounded-xl border-2 border-indigo-500 bg-white py-4 text-lg font-bold text-indigo-600 transition-all hover:bg-indigo-50 active:scale-95'
          >
            {translations.viewLeaderboard} 🏆
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

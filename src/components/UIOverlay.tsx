'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '@/locales/en';

type UIOverlayProps = {
  score: number;
  timeLeft: number;
  targetProductName: string;
  translations: Translations;
  feedback: { message: string; type: 'correct' | 'wrong' } | null;
};

export default function UIOverlay({
  score,
  timeLeft,
  targetProductName,
  translations,
  feedback,
}: UIOverlayProps) {
  return (
    <>
      {/* Header */}
      <div className='pointer-events-none fixed left-0 right-0 top-0 z-10 p-4 sm:p-6'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mx-auto max-w-4xl'
        >
          <div className='flex items-center justify-between gap-4'>
            {/* Score */}
            <motion.div
              className='rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:px-6'
              whileHover={{ scale: 1.05 }}
            >
              <div className='text-xs font-medium text-gray-600 sm:text-sm'>
                {translations.score}
              </div>
              <div className='text-2xl font-bold text-indigo-600 sm:text-3xl'>
                {score}
              </div>
            </motion.div>

            {/* Timer */}
            <motion.div
              className={`rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm sm:px-6 ${
                timeLeft <= 10 ? 'bg-red-500/90 animate-pulse' : 'bg-white/90'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`text-xs font-medium sm:text-sm ${
                  timeLeft <= 10 ? 'text-white' : 'text-gray-600'
                }`}
              >
                ⏱️ {translations.timeLeft}
              </div>
              <div
                className={`text-2xl font-bold sm:text-3xl ${
                  timeLeft <= 10 ? 'text-white' : 'text-orange-600'
                }`}
              >
                {timeLeft}s
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Target instruction */}
      <div className='pointer-events-none fixed bottom-0 left-0 right-0 z-10 p-4 sm:p-6'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mx-auto max-w-2xl'
        >
          <div className='rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 p-4 text-center shadow-lg backdrop-blur-sm sm:p-6'>
            <div className='text-sm font-medium text-indigo-100 sm:text-base'>
              {translations.find}
            </div>
            <div className='mt-1 text-2xl font-bold text-white sm:text-3xl'>
              ⭐{' '}
              {translations[targetProductName as keyof Translations] ||
                targetProductName}{' '}
              ⭐
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feedback animation */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='pointer-events-none fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2'
          >
            <div
              className={`rounded-3xl px-12 py-8 text-6xl font-bold shadow-2xl ${
                feedback.type === 'correct'
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {feedback.type === 'correct' ? '✓' : '✗'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

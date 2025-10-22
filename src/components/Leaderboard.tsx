'use client';

import { motion } from 'framer-motion';
import { Translations } from '@/locales/en';
import { LeaderboardEntry } from '@/hooks/useGameLogic';

type LeaderboardProps = {
  entries: LeaderboardEntry[];
  onClose: () => void;
  translations: Translations;
};

export default function Leaderboard({
  entries,
  onClose,
  translations,
}: LeaderboardProps) {
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
        className='w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10'
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='mb-6 text-center'
        >
          <h2 className='text-4xl font-bold text-indigo-600'>
            🏆 {translations.leaderboard}
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-6 max-h-96 overflow-y-auto'
        >
          {entries.length === 0 ? (
            <div className='rounded-2xl bg-gray-50 p-8 text-center'>
              <p className='text-lg text-gray-500'>
                No entries yet. Be the first to play!
              </p>
            </div>
          ) : (
            <div className='space-y-3'>
              {entries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`flex items-center gap-4 rounded-2xl p-4 ${
                    index === 0
                      ? 'bg-linear-to-r from-yellow-100 to-amber-100 shadow-md'
                      : index === 1
                      ? 'bg-linear-to-r from-gray-100 to-slate-100'
                      : index === 2
                      ? 'bg-linear-to-r from-orange-100 to-amber-50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                      index === 0
                        ? 'bg-yellow-400 text-yellow-900'
                        : index === 1
                        ? 'bg-gray-400 text-gray-900'
                        : index === 2
                        ? 'bg-orange-400 text-orange-900'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {index === 0
                      ? '🥇'
                      : index === 1
                      ? '🥈'
                      : index === 2
                      ? '🥉'
                      : index + 1}
                  </div>

                  <div className='flex-1'>
                    <p className='text-lg font-bold text-gray-800'>
                      {entry.name}
                    </p>
                    <p className='text-sm text-gray-600'>
                      {translations.score}: {entry.score} • {translations.time}:{' '}
                      {entry.timeLeft}s
                    </p>
                  </div>

                  <div className='text-right'>
                    <div className='text-2xl font-bold text-indigo-600'>
                      {entry.score}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {entry.timeLeft}s
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={onClose}
            className='w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl active:scale-95'
          >
            {translations.backToGame}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Translations } from '@/locales/en';

type StartScreenProps = {
  onStart: (name: string) => void;
  translations: Translations;
};

export default function StartScreen({
  onStart,
  translations,
}: StartScreenProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    } else {
      alert(translations.enterName + '!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600 p-4'
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-12'
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-8 text-center'
        >
          <h1 className='mb-2 text-4xl font-bold text-indigo-600 sm:text-5xl'>
            {translations.title}
          </h1>
          <p className='text-lg text-gray-600 sm:text-xl'>
            {translations.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='mb-8'
        >
          <div className='mb-4 rounded-2xl bg-indigo-50 p-6 space-y-3'>
            <p className='text-center text-sm font-bold text-indigo-600'>
              🎮 2 LEVELS - 2 CHALLENGES!
            </p>
            <div className='space-y-2 text-xs text-gray-700'>
              <div className='flex items-start gap-2'>
                <span className='font-bold text-blue-600'>Level 1:</span>
                <span>Find hidden objects in 3D room (60 seconds)</span>
              </div>
              <div className='flex items-start gap-2'>
                <span className='font-bold text-pink-600'>Level 2:</span>
                <span>
                  Answer 10 Frontend Developer quiz questions (60 seconds)
                </span>
              </div>
            </div>
            <p className='text-center text-xs text-gray-600 pt-2 border-t'>
              {translations.gameInstructions}
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className='mb-6'>
            <label
              htmlFor='playerName'
              className='mb-2 block text-sm font-medium text-gray-700'
            >
              {translations.enterName}
            </label>
            <input
              id='playerName'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translations.namePlaceholder}
              className='w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200'
              autoFocus
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 py-4 text-xl font-bold text-white shadow-lg transition-all hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl active:scale-95'
          >
            {translations.start} 🚀
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

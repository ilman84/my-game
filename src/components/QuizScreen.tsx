'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '@/locales/en';
import { QuizQuestion } from '@/data/quizQuestions';

type QuizScreenProps = {
  questions: QuizQuestion[];
  onQuizComplete: (score: number, timeLeft: number) => void;
  translations: Translations;
  language: 'en' | 'id';
};

const QUIZ_DURATION = 60;

export default function QuizScreen({
  questions,
  onQuizComplete,
  translations,
  language,
}: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      onQuizComplete(score, 0);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = Math.max(0, prev - 1);
        if (newTime === 0) {
          onQuizComplete(score, 0);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score, onQuizComplete]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      setAnsweredQuestions((prev) => prev + 1);

      if (nextIndex >= questions.length) {
        // Quiz selesai
        onQuizComplete(score + (isCorrect ? 1 : 0), timeLeft);
      } else {
        // Next question
        setCurrentQuestionIndex(nextIndex);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 1500);
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-purple-400 via-pink-500 to-red-500 p-4'>
      <div className='w-full max-w-3xl'>
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mb-6 flex items-center justify-between'
        >
          <div className='rounded-2xl bg-white/90 px-6 py-3 shadow-lg backdrop-blur-sm'>
            <div className='text-sm font-medium text-gray-600'>
              Level 2 - Quiz
            </div>
            <div className='text-2xl font-bold text-purple-600'>
              {answeredQuestions + 1} / {questions.length}
            </div>
          </div>

          <div className='rounded-2xl bg-white/90 px-6 py-3 shadow-lg backdrop-blur-sm'>
            <div className='text-sm font-medium text-gray-600'>
              {translations.score}
            </div>
            <div className='text-2xl font-bold text-green-600'>{score}</div>
          </div>

          <div
            className={`rounded-2xl px-6 py-3 shadow-lg backdrop-blur-sm ${
              timeLeft <= 10 ? 'bg-red-500/90 animate-pulse' : 'bg-white/90'
            }`}
          >
            <div
              className={`text-sm font-medium ${
                timeLeft <= 10 ? 'text-white' : 'text-gray-600'
              }`}
            >
              ⏱️ {translations.timeLeft}
            </div>
            <div
              className={`text-2xl font-bold ${
                timeLeft <= 10 ? 'text-white' : 'text-orange-600'
              }`}
            >
              {timeLeft}s
            </div>
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentQuestionIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='rounded-3xl bg-white p-8 shadow-2xl sm:p-12'
          >
            {/* Question */}
            <div className='mb-8'>
              <div className='mb-2 text-sm font-medium text-purple-600'>
                Frontend Developer Question
              </div>
              <h2 className='text-2xl font-bold text-gray-800 sm:text-3xl'>
                {language === 'en'
                  ? currentQuestion.question
                  : currentQuestion.questionID}
              </h2>
            </div>

            {/* Options */}
            <div className='space-y-4'>
              {(language === 'en'
                ? currentQuestion.options
                : currentQuestion.optionsID
              ).map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showFeedback && isSelected;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    className={`w-full rounded-2xl p-4 text-left transition-all sm:p-6 ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-red-500 text-white shadow-lg'
                        : selectedAnswer !== null
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-linear-to-r from-purple-50 to-pink-50 text-gray-800 hover:from-purple-100 hover:to-pink-100'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                          showResult
                            ? isCorrect
                              ? 'bg-green-600'
                              : 'bg-red-600'
                            : 'bg-purple-500 text-white'
                        }`}
                      >
                        {showResult
                          ? isCorrect
                            ? '✓'
                            : '✗'
                          : optionLabels[index]}
                      </div>
                      <div className='flex-1 text-lg font-medium'>{option}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className='mt-8'>
              <div className='h-2 w-full overflow-hidden rounded-full bg-gray-200'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      ((answeredQuestions + 1) / questions.length) * 100
                    }%`,
                  }}
                  className='h-full bg-linear-to-r from-purple-500 to-pink-500'
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

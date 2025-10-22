export type QuizQuestion = {
  id: number;
  question: string;
  questionID: string;
  options: string[];
  optionsID: string[];
  correctAnswer: number; // index 0-3 (A-D)
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    questionID: 'Apa kepanjangan dari HTML?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
    ],
    optionsID: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Which CSS property is used to change text color?',
    questionID: 'Property CSS mana yang digunakan untuk mengubah warna teks?',
    options: ['font-color', 'text-color', 'color', 'text-style'],
    optionsID: ['font-color', 'text-color', 'color', 'text-style'],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'What is the correct HTML tag for the largest heading?',
    questionID: 'Tag HTML yang benar untuk heading terbesar adalah?',
    options: ['<heading>', '<h6>', '<h1>', '<head>'],
    optionsID: ['<heading>', '<h6>', '<h1>', '<head>'],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: 'Which JavaScript framework is developed by Facebook?',
    questionID: 'Framework JavaScript mana yang dikembangkan oleh Facebook?',
    options: ['Vue.js', 'Angular', 'React', 'Svelte'],
    optionsID: ['Vue.js', 'Angular', 'React', 'Svelte'],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'What does CSS stand for?',
    questionID: 'Apa kepanjangan dari CSS?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    optionsID: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'Which HTML tag is used to create a hyperlink?',
    questionID: 'Tag HTML mana yang digunakan untuk membuat hyperlink?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    optionsID: ['<link>', '<a>', '<href>', '<url>'],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'Which CSS property controls the text size?',
    questionID: 'Property CSS mana yang mengontrol ukuran teks?',
    options: ['text-size', 'font-style', 'font-size', 'text-style'],
    optionsID: ['text-size', 'font-style', 'font-size', 'text-style'],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: 'What is the correct syntax for a JavaScript comment?',
    questionID: 'Sintaks yang benar untuk komentar JavaScript adalah?',
    options: [
      '<!-- This is a comment -->',
      '// This is a comment',
      '/* This is a comment */',
      'Both B and C',
    ],
    optionsID: [
      '<!-- Ini komentar -->',
      '// Ini komentar',
      '/* Ini komentar */',
      'B dan C benar',
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: 'Which HTML element is used for creating an unordered list?',
    questionID:
      'Elemen HTML mana yang digunakan untuk membuat daftar tidak berurut?',
    options: ['<ol>', '<list>', '<ul>', '<li>'],
    optionsID: ['<ol>', '<list>', '<ul>', '<li>'],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: 'What does DOM stand for in web development?',
    questionID: 'Apa kepanjangan dari DOM dalam web development?',
    options: [
      'Document Object Model',
      'Display Object Management',
      'Digital Organic Model',
      'Data Object Manipulation',
    ],
    optionsID: [
      'Document Object Model',
      'Display Object Management',
      'Digital Organic Model',
      'Data Object Manipulation',
    ],
    correctAnswer: 0,
  },
];

// import * as React from 'react'
interface Trivia {
  [key: string]: TriviaItem,
}
type TriviaItem = {
  ask: string,
  mul?: string[],
  ans: string,
}

export const trivia: Trivia = {
  '1': {
    ask: 'What\'s the smallest prime number?',
    ans: '2',
  },
  '2': {
    ask: 'Who is the Greek god of dreams?',
    mul: [
      'Hypnos',
      'Morpheus',
    ],
    ans: 'Morpheus',
  },
  '3': {
    ask: 'Who was the first man to step on the Moon?',
    mul: [
      'Neil Armstrong',
      'Buzz Aldrin',
    ],
    ans: 'Neil Armstrong',
  },
  '4': {
    ask: 'How many states are there in the USA?',
    mul: [
      '50',
      '40',
    ],
    ans: '50',
  },
  '5': {
    ask: 'When did WWI start?',
    mul: [
      '1914',
      '1913',
    ],
    ans: '1914',
  },
  '6': {
    ask: 'Who lived at 221B, Baker Street, London?',
    mul: [
      'Sherlock Holmes',
      'Winston Churchill',
    ],
    ans: 'Sherlock Holmes',
  },
  '7': {
    ask: 'What horoscope sign has a crab?',
    ans: 'Cancer',
  },
  '8': {
    ask: 'Who painted the Mona Lisa?',
    mul: [
      'Da Vinci',
      'Michaelangelo',
    ],
    ans: 'Da Vinci',
  },
  '9': {
    ask: 'Who painted the Sistine Chapel?',
    mul: [
      'Da Vinci',
      'Michaelangelo',
    ],
    ans: 'Michaelangelo',
  },
  '10': {
    ask: 'When did the Second World War end?',
    mul: [
      '1944',
      '1945',
    ],
    ans: '1945',
  },
  '11': {
    ask: 'What is the largest ocean?',
    ans: 'Pacific',
  },
  '12': {
    ask: 'Which planet is nearest to the sun?',
    ans: 'Mercury',
  },
  '13': {
    ask: 'What type of elephant has got the biggest ears?',
    mul: [
      'Indian',
      'African',
    ],
    ans: 'African',
  },
  '14': {
    ask: 'Who invented the electric light bulb?',
    mul: [
      'Thomas Edison',
      'Nikola Tesla',
    ],
    ans: 'Thomas Edison',
  },
  '15': {
    ask: 'Which fruit floats because 25% of its volume is air?',
    mul: [
      'Guava',
      'Apple',
    ],
    ans: 'Apple',
  },
  '16': {
    ask: 'What do the 7 dwarves do for a living?',
    mul: [
      'Miners',
      'Lumberjacks',
    ],
    ans: 'Miners',
  },
  '17': {
    ask: 'Which fruit has more genes than humans?',
    mul: [
      'Potatoes',
      'Tomatoes',
    ],
    ans: 'Tomatoes',
  },
  '18': {
    ask: 'Which nail grows fastest?',
    mul: [
      'Index',
      'Middle',
    ],
    ans: 'Middle',
  },
  '19': {
    ask: 'Which nail grows slowest?',
    mul: [
      'Pinky',
      'Thumb',
    ],
    ans: 'Pinky',
  },
}

export const spelling = {
  '1': {
    word: 'gerrymander',
    prs: 'https://media.merriam-webster.com/soundc11/g/gerrym01.wav',
  },
  '2': {
    word: 'filibuster',
    prs: 'https://media.merriam-webster.com/soundc11/f/filibu01.wav',
  },
  '3': {
    word: 'hegemony',
    prs: 'https://media.merriam-webster.com/soundc11/h/hegemo01.wav',
  }
}

export const doneThat = [
  'Are you married?',
  'Are you single?',
  'Do you have children?',
  'Been in Europe?',
  'Been in Japan?',
  'Been in Cebu?',
]
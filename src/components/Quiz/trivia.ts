// import * as React from 'react'
interface Trivia {
  [key: string]: TriviaItem,
}
type TriviaItem = {
  q: string,
  m: any,
  a: any | number,
}

export const trivia: Trivia = {
  '1': {
    q: 'What\'s the smallest prime number?',
    m: [],
    a: 2,
  },
  '2': {
    q: 'Who is the Greek god of dreams?',
    m: [
      'Hypnos',
      'Morpheus',
    ],
    a: 'Morpheus'
  },
}


export const spelling = [
  ['gerrymander', 'https://media.merriam-webster.com/soundc11/g/gerrym01.wav'],
  ['filibuster', 'https://media.merriam-webster.com/soundc11/f/filibu01.wav'],
  ['hegemony', 'https://media.merriam-webster.com/soundc11/h/hegemo01.wav'],
]


export const doneThat = []
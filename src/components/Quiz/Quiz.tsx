import React, { useState } from 'react'

import { TriviaGame } from '../Games/Trivia'
import { Spelling } from '../Games/Spelling'
import { DoneThat } from '../Games/DoneThat'

const TRIVIA = 'TRIVIA'
const SPELLING = 'SPELLING'
const DONETHAT = 'DONETHAT'

export const Quiz: React.FC<{}> = () => {
  const [game, changeGame] = useState()

  return (
    <div className="bg-gray-700">
      <button onClick={() => changeGame(TRIVIA)}>{TRIVIA}</button>
      <button onClick={() => changeGame(SPELLING)}>{SPELLING}</button>
      <button onClick={() => changeGame(DONETHAT)}>{DONETHAT}</button>

      <TriviaGame visible={game === TRIVIA} />
      <Spelling visible={game === SPELLING} />
      <DoneThat visible={game === DONETHAT} />
    </div>
  )
}

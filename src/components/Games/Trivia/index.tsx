import React, { useState } from 'react'

import { trivia } from '../data'
import { useGameController } from '../index'

export const TriviaGame: React.FC<{ visible?: boolean }> = ({ visible }) => {
  const {
    question,
    QID,
    onFetchQuestion,
    action,
    NEXT,
  } = useGameController(trivia)

  return (
    <div id="game__trivia" style={!visible ? { visibility: 'hidden', position: 'absolute' } : {}}>
      <h1>Trivia</h1>
      <button onClick={onFetchQuestion}>
        {action}
      </button>
      {question && (
        <>
        <h1>#{QID} {question.ask}</h1>
        {question.mul
          ? question.mul.map((choice: any) => (
            <p>[{action === NEXT && question.ans === choice ? 'x' : ' '}] {choice}</p>
          ))
          : action === NEXT ? question.ans : null
        }
        </>
      )}
      {QID < 0 && <h1>No trivia left!</h1>}
    </div>
  )
}

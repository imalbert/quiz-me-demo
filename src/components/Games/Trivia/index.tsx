import React, { useState } from 'react'

import { trivia } from '../data'

const NEXT = 'Next Trivia'
const SHOW = 'Show Answer'
export const TriviaGame: React.FC<{ visible?: boolean }> = ({ visible }) => {
  const [QID, changeQID] = useState(Object.values(trivia).length)
  const [question, changeQuestion] = useState()
  const [action, changeAction] = useState(NEXT)

  const onFetchQ = () => {
    if (action === NEXT) {
      changeQuestion(trivia[QID])
      changeQID(QID - 1)
      changeAction(SHOW)
    } else {
      changeAction(NEXT)
    }
  }

  return (
    <div id="game__trivia" style={!visible ? { visibility: 'hidden', position: 'absolute' } : {}}>
      <h1>Trivia</h1>
      <button onClick={onFetchQ}>
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

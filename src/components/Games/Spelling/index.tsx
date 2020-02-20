import React from 'react'

import { spelling } from '../data'
import { useGameController } from '../index'

export const Spelling: React.FC<{ visible?: boolean }> = ({ visible }) => {
  const {
    question,
    QID,
    onFetchQuestion,
    action,
    NEXT,
  } = useGameController(spelling)

  return (
    <div id="game__spelling" style={!visible ? { visibility: 'hidden', position: 'absolute' } : {}}>
      <h1>Spelling</h1>
      <button onClick={onFetchQuestion}>
        {action}
      </button>
      {question && (
        <>
          <h1>#{QID}</h1>
          <audio controls>
            <source src={question.prs} type="audio/wav" />
          </audio>
          {action === NEXT ? question.word : null}
        </>
      )}
      {QID < 0 && <h1>No words left!</h1>}
    </div>
  )
}
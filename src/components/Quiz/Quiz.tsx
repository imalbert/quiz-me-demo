import React, { useState, useEffect } from 'react'
import { trivia, spelling, doneThat, } from './trivia'
import { TriviaGame } from '../Games/Trivia'

interface Props {
}

const TRIVIA = 'TRIVIA'
const SPELLING = 'SPELLING'

export const Quiz: React.FC<Props> = () => {
  const [game, changeGame] = useState()

  return (
    <div className="bg-gray-700">
      <button onClick={() => changeGame(TRIVIA)}>{TRIVIA}</button>
      <button onClick={() => changeGame(SPELLING)}>{SPELLING}</button>
      <TriviaGame visible={game === TRIVIA} />
      <Spelling visible={game === SPELLING} />
    </div>
  )
}

export const Spelling: React.FC<{ visible?: boolean }> = ({ visible }) => {
  return (
    <div id="game__spelling" style={!visible ? { visibility: 'hidden', position: 'absolute' } : {}}>
      {spelling.map((word, idx) => (
        <audio controls>
          <source src={word[1]} type="audio/wav" />
        </audio>
      ))}
    </div>
  )
}

const initQ = { q: '0', a: 0, m: [] }
const Trivia: React.FC<{}> = () => {
  const [qIdx, chQqIdx] = useState('0')
  const [q, chQq] = useState(initQ)
  const [showA, chShowA] = useState(false)

  const [rand1, chRand1] = useState()
  const [rand2, chRand2] = useState()

  const onChangeQIdx = (e: any) => {
    const val = parseInt(e.target.value)
    chQqIdx(isNaN(val) ? '0' : val.toString())
  }

  const onFetchQ = () => {
    console.log(trivia[qIdx] || initQ)
    chQq(trivia[qIdx] || initQ)
  }

  const onShowA = () => {
    chShowA(!showA)
  }

  return (
    <div style={{ height: '100vh' }}>
      <div id="trivia">
        <p>Hi!, enter the question #</p>
        <input type="text" value={qIdx} onChange={onChangeQIdx} />
        <button onClick={onFetchQ}>Fetch question</button>
        <button onClick={onShowA}>Show answers</button>

        <div>
        <p>{q.q}</p>
        {q.m.map((m, i) => (
        <p key={`choices-${i}`}>
          {`${i+1}. ${m}`}
        </p>
        ))}

        {showA &&
          <p>
            {q.a}
          </p>
        }
        </div>
      </div>

      

      <div id="donethat">
        <button onClick={() => {
          chRand1(Math.floor(Math.random() * (doneThat.length - 1)))
          chRand2(Math.floor(Math.random() * (doneThat.length - 1)))
        }}>
          Choose 2 random
        </button>
        <p>
          {isNaN(rand1) ? null : doneThat[rand1]}
        </p>
        <p>
          {isNaN(rand2) ? null : doneThat[rand2]}
        </p>
      </div>
    </div>
  )
}

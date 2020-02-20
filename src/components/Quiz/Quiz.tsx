import React, { useState } from 'react'
import { trivia, spelling } from './trivia'

interface Props {
}

export const Quiz: React.FC<Props> = () => {
  return (
    <div className="bg-gray-700 flex items-center justify-center">
      <Trivia />
    </div>
  )
}

const initQ = { q: '0', a: 0, m: [] }
const Trivia: React.FC<{}> = () => {
  const [qIdx, chQqIdx] = useState('0')
  const [q, chQq] = useState(initQ)
  const [showA, chShowA] = useState(false)

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

      <div id="spelling">
        {spelling.map((word, idx) => (
          <audio controls>
            <source src={word[1]} type="audio/wav" />
          </audio>
        ))}
      </div>

      <div id="donethat">

      </div>
    </div>
  )
}

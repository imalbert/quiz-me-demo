import React, { useState } from 'react'

import { doneThat } from '../data'

export const DoneThat: React.FC<{ visible?: boolean }> = ({ visible }) => {
  const [rand1, chRand1] = useState()
  const [rand2, chRand2] = useState()

  return (
    <div id="game__donethat" style={!visible ? { visibility: 'hidden', position: 'absolute' } : {}}>
      <button onClick={() => {
        chRand1(Math.floor(Math.random() * (doneThat.length - 1)))
        chRand2(Math.floor(Math.random() * (doneThat.length - 1)))
      }}>
        Roll 2
      </button>
      <p>
        {isNaN(rand1) ? null : doneThat[rand1]}
      </p>
      <p>
        {isNaN(rand2) ? null : doneThat[rand2]}
      </p>
    </div>
  )
}

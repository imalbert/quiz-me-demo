import { useState } from 'react'

export function useGameController(data: any) {
  const NEXT = 'Next?'
  const SHOW = 'Show Answer'
  const [QID, changeQID] = useState(Object.values(data).length)
  const [question, changeQuestion] = useState()
  const [action, changeAction] = useState(NEXT)

  const onFetchQuestion = () => {
    if (action === NEXT) {
      changeQuestion(data[QID])
      changeQID(QID - 1)
      changeAction(SHOW)
    } else {
      changeAction(NEXT)
    }
  }

  return {
    question,
    QID,
    onFetchQuestion,
    action,
    NEXT,
  }
}
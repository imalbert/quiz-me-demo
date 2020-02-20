import React from 'react'

interface Props {
  day: number,
}

export const Day: React.FC<Props> = ({
  day,
}) => (
  <div className="bg-gray-700 flex items-center justify-center">
    {day}
  </div>
)
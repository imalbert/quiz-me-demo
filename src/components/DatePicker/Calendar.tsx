import React from 'react'
import cx from 'classnames'

interface Props {
  daysArray: number[],
  weekdayNames?: string[],
}

export const Calendar: React.FC<Props> = ({
  daysArray = [],
  weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
}) => {
  const weekdayClass = cx('pt-1 text-center')
  const daysClass = cx('bg-gray-700 text-right pb-8 pr-1')

  return (
    <>
    <div className="text-center p-4 text-2xl">February 2020</div>
    <div className="grid grid-cols-7 gap-4">
      {weekdayNames.map((day: string) => (
        <div className={weekdayClass} key={`weekday-${day}`}>
          {day}
        </div>
      ))}
      {daysArray.map((day: number, index) => (
        <div className={daysClass} key={`date-${index}-${day}`}>
          {day}
        </div>
      ))}
    </div>
    </>
  )
}

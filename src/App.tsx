import React from "react";
import { Provider, rootStore } from "./models/Root";
import { Calendar } from './components/DatePicker/Calendar'
import moment from 'moment'

const numToDays = (): number[] => {
  const dayCount = 42
  let numberOfDays = moment().endOf('month').date()
  let d = 1; let dArr = [];
  // TODO: what day is day 1 of month? add a +offset
  let endDayOfPreviousMonth = moment().subtract(1, 'month').endOf('month').date()
  let firstWeekOffset = moment().startOf('month').weekday() - 1

  for(let i = endDayOfPreviousMonth - firstWeekOffset; i <= endDayOfPreviousMonth; i++) {
    dArr.push(i)
  }

  while (d <= numberOfDays) {
    dArr.push(d); d++
  }

  const daysLeft = dayCount - dArr.length
  for(let i = 1; i <= daysLeft ; i++) {
    dArr.push(i)
  }

  return dArr
}

const App: React.FC = () => {
  return (
    <Provider value={rootStore}>
      <Calendar daysArray={numToDays()} />
    </Provider>
  );
};

export default App;

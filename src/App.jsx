import React, { useEffect, useState } from 'react';
import './style.css';
import { getDeadlineFromAPI } from './utils.js';
import Clock from './Clock.jsx';
import { getRemainingTime } from './utils.js';

const URL = 'https://api.climateclock.world/v2/clock.json';

export default function App() {
  const [climateCountdown, setClimateCountdown] = useState({
    year: '12',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(null);

  // useEffect(() => {
  //   getDeadlineFromAPI(URL)
  //     .then((data) => data.toString())
  //     .then((stringData) => setDateOfDeadline(stringData));

  //   const interval = setInterval(() => {
  //     updateRemainingTime(dateOfDeadline);
  //     console.log(climateCountdown);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [climateCountdown]);

  function updateRemainingTime(dateOfDeadline) {
    console.log({ dateOfDeadline }, typeof dateOfDeadline);
    const res = setClimateCountdown(getRemainingTime(dateOfDeadline));
    console.log({ res });
  }
  // console.log({ climateDeadline });
  // console.log(typeof dateOfDeadline);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>
        <Clock time={climateCountdown} />
      </div>
    </div>
  );
}
//2029-07-22T16:00:00+00:00"

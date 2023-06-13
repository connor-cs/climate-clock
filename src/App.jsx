import React, { useEffect, useState } from 'react';
import { getDeadlineFromAPI } from './utils.js';
import Clock from './Clock.jsx';
import './index.css'
import { getRemainingTime } from './utils.js';

const URL = 'https://api.climateclock.world/v2/clock.json';

export default function App() {
  const [climateCountdown, setClimateCountdown] = useState({
    years: '12',
    months: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    milliseconds: ''
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(null);

  useEffect(() => {
    getDeadlineFromAPI(URL)
      .then((data) => data.toString())
      .then((stringData) => setDateOfDeadline(stringData));

    const interval = setInterval(() => {
      updateRemainingTime(dateOfDeadline);
    }, 1);

    return () => clearInterval(interval);
  }, [climateCountdown]);

  function updateRemainingTime(dateOfDeadline) {
    setClimateCountdown(getRemainingTime(dateOfDeadline));
  }

  return (
    <div className='main'>
      <h1>Climate Deadline Countdown</h1>
      <div className='container'>
        <Clock time={climateCountdown} />
      </div>
    </div>
  );
}

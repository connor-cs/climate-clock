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
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(null);

  useEffect(() => {
    getDeadlineFromAPI(URL)
      .then((data) => data.toString())
      .then((stringData) => setDateOfDeadline(stringData));

    const interval = setInterval(() => {
      updateRemainingTime(dateOfDeadline);
      console.log(climateCountdown);
    }, 1000);

    return () => clearInterval(interval);
  }, [climateCountdown]);


  //TESTING TO MAKE SURE getRemainingTime WORKS.
  //RETURNS OBJECT AS EXPECTED
  // const time = ()=> {
  //   const res = getRemainingTime("2029-07-22T16:00:00+00:00")
  //   setClimateCountdown(res)
  // console.log(time)}
  // time()

  //THIS CAUSES TOO MANY RERENDERS FOR SOME REASON
  // const interval = setInterval(() => {
  //       updateRemainingTime(dateOfDeadline);
  //        console.log(climateCountdown);
  //        getRemainingTime("2029-07-22T16:00:00+00:00")
  //      }, 10000);

  function updateRemainingTime(dateOfDeadline) {
    console.log({ dateOfDeadline }, typeof dateOfDeadline);
    setClimateCountdown(getRemainingTime(dateOfDeadline));
  }
  // console.log({ climateDeadline });
  // console.log(typeof dateOfDeadline);

  return (
    <div className='main'>
      <h1>Climate Deadline Countdown</h1>
      <div className='container'>
        <Clock time={climateCountdown} />
      </div>
    </div>
  );
}

//"2029-07-22T16:00:00+00:00"

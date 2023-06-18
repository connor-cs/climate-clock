import React, { useEffect, useState } from "react";
import { getDeadlineFromAPI } from "./utils.js";
import Clock from "./Clock.jsx";
import "./index.css";
import { getRemainingTime } from "./utils.js";
import moment from "moment";

const URL = "https://api.climateclock.world/v2/clock.json";

export default function App() {
  const [climateCountdown, setClimateCountdown] = useState({
    // years: timeBetween.years(),
    // months: timeBetween.months(),
    // days: timeBetween.days(),
    // hours: timeBetween.hours(),
    // minutes: timeBetween.minutes(),
    // seconds: timeBetween.seconds(),
    // milliseconds: timeBetween.milliseconds(),
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(
    moment("2029-07-22T16:00:00+00:00")
  );

  useEffect(() => {
    const timeBetween = moment.duration(dateOfDeadline.diff(moment()));
    
    const interval = setInterval(() => {
      setClimateCountdown({
        years: timeBetween.years(),
        months: timeBetween.months(),
        days: timeBetween.days(),
        hours: timeBetween.hours(),
        minutes: timeBetween.minutes(),
        seconds: padWithZeroes(timeBetween.seconds(), 2),
        milliseconds: padWithZeroes(timeBetween.milliseconds(), 3)
      });

    }, 1);

    return () => clearInterval(interval);
  }, [climateCountdown]);


  return (
    <div className="main">
      <h1>Climate Deadline Countdown</h1>
      <div className="container">
        <Clock time={climateCountdown} />
      </div>
    </div>
  );

  function padWithZeroes(input, minLength) {
    const inputString = input.toString()
    if (inputString.length >= minLength) return input
    return '0'.repeat(minLength-inputString.length) + inputString
  }
}

//"2029-07-22T16:00:00+00:00"

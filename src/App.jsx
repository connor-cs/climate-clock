import React, { useEffect, useState } from "react";
import { getDeadlineFromAPI } from "./utils.js";
import Clock from "./Clock.jsx";
import "./index.css";
import { getRemainingTime } from "./utils.js";

const URL = "https://api.climateclock.world/v2/clock.json";

export default function App() {
  const [climateCountdown, setClimateCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(0);

  useEffect(() => {
    getDeadlineFromAPI(URL)
      .then((data) => data.toString())
      .then((stringData) => setDateOfDeadline(stringData));

    const interval = setInterval(() => {
      updateRemainingTime(dateOfDeadline);
    }, 1);

    return () => clearInterval(interval);
  }, [climateCountdown, dateOfDeadline]);

  function updateRemainingTime(dateOfDeadline) {
    setClimateCountdown(getRemainingTime(dateOfDeadline));
  }

  return (
    <div className="main">
      <h1>Climate Deadline Countdown</h1>
      <div className="container">
        <Clock time={climateCountdown} />
      </div>
    </div>
  );
}

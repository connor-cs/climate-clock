import React from "react";

export default function Clock({ time }) {
  console.log('time from clock', time)
  return (
    <div className="clock-main">
      <h3>Time left</h3>
      <main>
        <div className="years">
          <span>Years</span>
          <span>{time.years}</span>
        </div>
        <div className="months">
          <span>Months</span>
          <span>{time.months}</span>
        </div>
        <div className="days">
          <span>Days</span>
          <span>{time.days}</span>
        </div>
        <div className="hours">
          <span>Hours</span>
          <span>{time.hours}</span>
        </div>
        <div className="minutes">
          <span>Minutes</span>
          <span>{time.minutes}</span>
        </div>
        <div className="seconds">
        <span>Seconds</span>
          <span>{time.seconds}</span>
        </div>

        
      </main>
    </div>
  );
}

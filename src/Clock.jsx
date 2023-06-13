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

        <span>Seconds</span>
      </main>
    </div>
  );
}

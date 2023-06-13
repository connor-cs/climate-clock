import React from "react";

export default function Clock({ time }) {
  return (
    <div className="clock-main">
      <h3>Time left</h3>
      <main>
        <div className="years">
          <span>Years</span>
          <span>{time.year}</span>
        </div>
        <div className="months">
          <span>Months</span>
          <span>{time.month}</span>
        </div>
        <div className="days">
          <span>Days</span>
          <span>{time.day}</span>
        </div>
        <div className="hours">
          <span>Hours</span>
          <span>{time.hour}</span>
        </div>

        <span>Seconds</span>
      </main>
    </div>
  );
}

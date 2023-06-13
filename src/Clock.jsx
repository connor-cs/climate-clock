import React from "react";

export default function Clock({ time }) {
  return (
    <div className="clock-main">
      <h3>Time left</h3>
      <main>
        <div className="years sect">
          <span>{time.years}</span>
          <span className="label">Years</span>
        </div>
        <div className="months sect">
          <span>{time.months}</span>
          <span className="label">Months</span>
        </div>
        <div className="days sect">
          <span>{time.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="hours sect">
          <span>{time.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="minutes sect">
          <span>{time.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="seconds sect">
          <span>{time.seconds}</span>
          <span className="label">Seconds</span>
        </div>
        <div className="seconds sect">
          <span>{time.milliseconds}</span>
          <span className="label">Milliseconds</span>
        </div>
      </main>
    </div>
  );
}

import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, setTimeLeft]);

  return <div className="timer-container">Time left: {timeLeft} seconds</div>;
};

export default Timer;

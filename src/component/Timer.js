import React, { useEffect, useState } from "react";

const Timer = ({ timeLimit = 30, onTimeUp = () => {} }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="timer">Time Left: {timeLeft}s</div>;
};

export default Timer;

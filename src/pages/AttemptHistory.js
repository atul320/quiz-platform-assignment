import React, { useState, useEffect } from "react";
import { getAttempts } from "../utils/storage";

const AttemptHistory = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    async function fetchAttempts() {
      const data = await getAttempts();
      setAttempts(data);
    }
    fetchAttempts();
  }, []);

  return (
    <div className="history-container">
      <h2>Attempt History</h2>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            Score: {attempt.score} | Date: {new Date(attempt.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttemptHistory;

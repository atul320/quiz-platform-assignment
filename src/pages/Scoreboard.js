import React, { useState, useEffect } from "react";
import { getAttempts } from "../utils/storage";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      const attempts = await getAttempts();
      if (attempts.length === 0) {
        console.log("No scores found.");
      }
      const sortedScores = attempts.sort((a, b) => b.score - a.score);
      setScores(sortedScores);
    }
    fetchScores();
  }, []);

  return (
    <div className="scoreboard-container">
      <h2>🏆 Scoreboard</h2>
      {scores.length === 0 ? (
        <p>No scores available. Take a quiz to see results!</p>
      ) : (
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((attempt, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{attempt.score}</td>
                <td>{new Date(attempt.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Scoreboard;

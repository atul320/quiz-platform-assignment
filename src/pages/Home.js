import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Platform</h1>
      <Link to="/quiz">
        <button className="start-quiz-btn">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;

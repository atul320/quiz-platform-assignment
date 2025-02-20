import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import {QuizPage} from "./pages/QuizPage";
import Scoreboard from "./pages/Scoreboard";
import AttemptHistory from "./pages/AttemptHistory.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-4">
          <Link to="/">Home</Link>  
          <Link to="/quiz">Quiz</Link>  
          <Link to="/scoreboard">Scoreboard</Link>  
          <Link to="/attempt-history">Attempt History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/attempt-history" element={<AttemptHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/scoreboard">Scoreboard</Link>
      <Link to="/attempt-history">Attempt History</Link>
    </nav>
  );
};

export default Navbar;

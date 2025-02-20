import React from "react";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)} className="option-button">
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

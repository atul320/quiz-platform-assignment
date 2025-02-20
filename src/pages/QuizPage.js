import React, { useState } from "react";
import quizData from "../utils/quizData";
import { saveAttempt } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import Timer from "../component/Timer"; 

export function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === quizData[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizOver(true);
        saveAttempt(score + 1).then(() => {
          console.log("Score saved successfully!");
          navigate("/scoreboard"); 
        });
      }
    }, 1000);
  };

  const handleTimeUp = () => {
    alert("Time's up! Moving to the next question.");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizOver(true);
      saveAttempt(score).then(() => {
        console.log("Score saved successfully!");
        navigate("/scoreboard");
      });
    }
  };

  if (quizOver) {
    return <h2>Saving your score...</h2>;
  }

  return (
    <div>
      <Timer timeLimit={30} onTimeUp={handleTimeUp} /> 
      <h2>{quizData[currentQuestion].question}</h2>
      {quizData[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
      <p>Score: {score}</p>
    </div>
  );
}

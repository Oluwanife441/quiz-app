import React from "react";
import "../styles/Question.css";
const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Question from "../components/Question";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import "../styles/Quiz.css";

const Quiz = () => {
  const location = useLocation();
  const selectedTopics = location.state?.topics || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [topicScores, setTopicScores] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);
  const [answers, setAnswers] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const questions = fetchQuestionsByTopics(selectedTopics);

  useEffect(() => {
    if (timeLeft === 0) {
      goToNextQuestion();
    }
  }, [timeLeft]);

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(60);
      setIsAnswered(!!answers[currentQuestion + 1]);
    } else {
      navigate("/results", {
        state: { score, totalQuestions: questions.length, topicScores },
      });
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(60);
      setIsAnswered(!!answers[currentQuestion - 1]);
    }
  };

  const handleAnswer = (selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: selectedOption,
    }));
    setIsAnswered(true);

    const currentTopic = questions[currentQuestion].topic;
    if (selectedOption === questions[currentQuestion].correct) {
      if (!answers[currentQuestion]) {
        setScore(score + 1);
        setTopicScores((prev) => ({
          ...prev,
          [currentTopic]: (prev[currentTopic] || 0) + 1,
        }));
      }
    } else {
      if (answers[currentQuestion] === questions[currentQuestion].correct) {
        setScore(score - 1);
        setTopicScores((prev) => ({
          ...prev,
          [currentTopic]: (prev[currentTopic] || 1) - 1,
        }));
      }
    }

    setTimeout(goToNextQuestion, 1000);
  };

  return (
    <div className="quiz-container">
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <div className="question-container">
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedOption={answers[currentQuestion]}
          correctAnswer={questions[currentQuestion].correct}
        />
      </div>
      <div className="navigation-buttons">
        <button
          onClick={goToPreviousQuestion}
          className="prev-button"
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextQuestion}
          className="prev-button"
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
      <div className="score-display">
        Score: {score} / {questions.length}
      </div>
    </div>
  );
};

// Function to fetch questions based on selected topics
const fetchQuestionsByTopics = (selectedTopics) => {
  const allQuestions = {
    Mathematics: [
      {
        topic: "Mathematics",
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
      },
      {
        topic: "Mathematics",
        question: "What is 10 * 5?",
        options: ["40", "50", "60", "70"],
        correct: 1,
      },
    ],
    Literature: [
      {
        topic: "Literature",
        question: "Who wrote Hamlet?",
        options: ["Shakespeare", "Dickens", "Austen", "Twain"],
        correct: 0,
      },
      {
        topic: "Literature",
        question: "Who wrote 1984?",
        options: ["Orwell", "Huxley", "Bradbury", "Atwood"],
        correct: 0,
      },
    ],
    Science: [
      {
        topic: "Science",
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0,
      },
      {
        topic: "Science",
        question: "What is the closest planet to the Sun?",
        options: ["Venus", "Mars", "Mercury", "Earth"],
        correct: 2,
      },
    ],
    History: [
      {
        topic: "History",
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2,
      },
      {
        topic: "History",
        question: "Who was the first President of the United States?",
        options: ["Adams", "Jefferson", "Washington", "Lincoln"],
        correct: 2,
      },
    ],
  };

  return selectedTopics.flatMap((topic) => allQuestions[topic] || []);
};

export default Quiz;

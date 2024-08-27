import React from "react";
import { useLocation, Link } from "react-router-dom";
import ResultChart from "../components/ResultChart";
import ScoreSummary from "../components/ScoreSummary";
import "../styles/Result.css";
const Results = () => {
  const location = useLocation();
  const { score, totalQuestions, topicScores } = location.state || {};

  if (!score && score !== 0) {
    return <div>No results available. Please take the quiz first.</div>;
  }

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      {topicScores && Object.keys(topicScores).length > 0 ? (
        <ResultChart data={topicScores} />
      ) : (
        <p>No topic scores available.</p>
      )}
      <ScoreSummary score={score} total={totalQuestions} />
      <Link to="/" className="restart-button">
        Restart Quiz
      </Link>
    </div>
  );
};

export default Results;

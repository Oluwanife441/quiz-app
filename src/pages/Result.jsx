import React from "react";
import { useLocation, Link } from "react-router-dom";
import ResultChart from "../components/ResultChart";
import ScoreSummary from "../components/ScoreSummary";
import "../styles/Result.css";
const Results = () => {
  const location = useLocation();
  const score = location.state?.score || 0;

  // Placeholder data for the chart
  const chartData = {
    Mathematics: 3,
    Science: 2,
    History: 4,
    Literature: 1,
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      <ResultChart data={chartData} />
      <ScoreSummary score={score} total={10} />{" "}
      {/* Assuming 10 questions total */}
      <Link to="/" className="restart-button">
        Restart Quiz
      </Link>
    </div>
  );
};

export default Results;

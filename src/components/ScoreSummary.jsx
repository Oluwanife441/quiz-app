import React from "react";

const ScoreSummary = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="score-summary">
      <h2>Your Score</h2>
      <p>
        {score} out of {total}
      </p>
      <p>{percentage}%</p>
    </div>
  );
};

export default ScoreSummary;

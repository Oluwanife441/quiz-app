import React from "react";
// We'll use a charting library later, for now just a placeholder
const ResultChart = ({ data }) => {
  return (
    <div className="result-chart">
      <h2>Performance by Topic</h2>
      {Object.entries(data).map(([topic, score]) => (
        <div key={topic} className="chart-bar">
          <span>{topic}</span>
          <div style={{ width: `${score * 10}%` }}>{score}</div>
        </div>
      ))}
    </div>
  );
};

export default ResultChart;

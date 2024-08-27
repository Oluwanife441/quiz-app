import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/resultchart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const ResultChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Performance by Topic",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="result-chart">
      <div style={{ height: "300px", width: "100%" }}>
        <Pie data={chartData} options={options} />
      </div>
      <div className="score-breakdown">
        {Object.entries(data).map(([topic, score]) => (
          <div key={topic} className="score-item">
            <span className="topic">{topic}:</span>
            <span className="score">{score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultChart;

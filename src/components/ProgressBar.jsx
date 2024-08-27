import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-text">
        Question {current} of {total}
      </div>
    </div>
  );
};

export default ProgressBar;

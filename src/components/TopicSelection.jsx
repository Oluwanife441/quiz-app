import React, { useState } from "react";

const topics = ["Mathematics", "Literature", "Science", "History"];

const TopicSelection = ({ onSelectTopics }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    setSelectedTopics((prevTopics) => {
      const newTopics = prevTopics.includes(topic)
        ? prevTopics.filter((t) => t !== topic)
        : [...prevTopics, topic];

      onSelectTopics(newTopics); // Update parent component
      return newTopics;
    });
  };

  return (
    <div className="topic-selection">
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => toggleTopic(topic)}
          className={`topic-btn ${
            selectedTopics.includes(topic) ? "selected" : ""
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default TopicSelection;

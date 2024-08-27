import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicSelection from "../components/TopicSelection";
import { useSpring, animated } from "react-spring";
import "../styles/Home.css";
import "../styles/homeani.css";
import "../styles/btn.css";

const Home = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const handleTopicSelection = (topics) => {
    setSelectedTopics(topics);
  };

  const startQuiz = () => {
    if (selectedTopics.length > 0) {
      console.log("Starting quiz with topics:", selectedTopics); // Debug log
      navigate("/quiz", { state: { topics: selectedTopics } });
    } else {
      alert("Please select at least one topic before starting the quiz.");
    }
  };

  return (
    <animated.div style={fadeIn} className="home-container">
      <h1 className="text-pop-up-top">Welcome to QuizMaster</h1>
      <p className="text-flicker-in-glow">
        Select up to 4 topics for your quiz:
      </p>
      <TopicSelection onSelectTopics={handleTopicSelection} />
      <button
        onClick={startQuiz}
        className="start-quiz-btn btn"
        disabled={selectedTopics.length === 0}
      >
        Start Quiz
      </button>
    </animated.div>
  );
};

export default Home;

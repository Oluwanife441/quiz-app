// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "../styles/Navbar.css";
// import "../styles/navani.css";

const Navbar = () => {
  const navAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.nav style={navAnimation} className="navbar ">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo ">
          STA Quiz
        </Link>
      </div>
    </animated.nav>
  );
};

export default Navbar;

import React from "react";
import "./animatedButton.css";
import { Link } from "react-router";

const AnimatedButton = ({ mainText = "Main Text", hoverText = "Hover text", link="/", className = "" }) => {
  return (
    <div>
      <Link to={link} type="button" className = {`btn ${className}`}>
        <span className="btn__ripple"></span>
        <span className="btn__content">
          <span className="btn__text" data-attr={hoverText}>
            {mainText}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default AnimatedButton;

// Loader.js
import React from "react";
import "./Loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="ring">
        <span className="diamond"></span>
      </div>
    </div>
  );
};

export default Loader;

import React from "react";
import "../../styles/LoadingBuffer.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <p className="loading-text">Getting Players</p>
      <div className="spinner-sector spinner-sector-accent"></div>
      <div className="spinner-sector spinner-sector-dark"></div>
      <div className="spinner-sector spinner-sector-light"></div>
    </div>
  );
};

export default LoadingSpinner;

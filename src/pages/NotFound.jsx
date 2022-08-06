import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Page.css";
import "../styles/NotFound.css";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <div className="not-found page">
      <p className="no-results-message">
        Looks like there isn't anything here...
      </p>
      <button
        className="back-button"
        onClick={() => navigate("/wbs-nba-viewer")}
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;

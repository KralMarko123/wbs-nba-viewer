import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Page.css";

const Details = () => {
  const { state } = useLocation();
  const { name } = state;

  return <div className="details page">{name}</div>;
};

export default Details;

import React from "react";
import arrow from "../assets/icon-arrow.svg";
import "./ArrowButton.css";

export default function ArrowButton() {
  return (
    <div className="arrowButton-container">
      <div className="line"></div>
      <div className="arrowImg-container">
        <img src={arrow} />
      </div>
      <div className="line"></div>
    </div>
  );
}

import React from "react";
import arrow from "../assets/icon-arrow.svg";
import "./ArrowButton.css";

export default function ArrowButton(props) {
  return (
    <div className="arrowButton-container">
      <div className="line" /> 
      <div className="arrowImg-container">
        <button type="submit" onClick={props.lick}>
          <img src={arrow}  />
        </button>
      </div>
      <div className="line" />
    </div>
  );
}

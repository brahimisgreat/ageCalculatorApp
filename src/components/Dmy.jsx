import ArrowButton from "./ArrowButton";
import "./Dmy.css";
import { useState } from "react";

export default function Dmy({ day, setDay, month, setMonth, year, setYear }) {
  const click = () => {
    console.log(day, month, year);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="dmy-container">
        <div className="date-container">
          <label htmlFor="day">DAY</label>
          <div className="input-container">
            <input
              type="number"
              onChange={(e) => {
                setDay(e.target.value);
              }}
              value={day ? day : "DD"}
              id="day"
              name="day"
              placeholder="DD"
            />
          </div>
        </div>
        <div className="date-container">
          <label htmlFor="month">MONTH</label>
          <div className="input-container">
            <input
              type="number"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              value={month ? month : "MM"}
              id="month"
              placeholder="MM"
            />
          </div>
        </div>
        <div className="date-container">
          <label htmlFor="year">YEAR</label>
          <div className="input-container">
            <input
              type="number"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              value={year ? year : "YYYY"}
              id="year"
              placeholder="YYYY"
            />
          </div>
        </div>
      </div>
      <ArrowButton lick={click} />
    </form>
  );
}

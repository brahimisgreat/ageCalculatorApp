import React from "react";
import './Age.css'

export default function Age() {
  return (
    <div className="age-container">
      <div className="ymd">
       <p>{"38"}</p> <h1>years</h1>
      </div>
      <div className="ymd">
        <p>{"3"}</p> <h1>months</h1>
      </div>
      <div className="ymd">
       <p>{"26"}</p> <h1>days</h1>
      </div>
    </div>
  );
}

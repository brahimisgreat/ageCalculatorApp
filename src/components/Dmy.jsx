import "./Dmy.css";

export default function Dmy() {
  return (
    <div className="dmy-container">
      <div className="date-container">
        <label>DAY</label>
        <div className="input-container">
          <input type="number" />
        </div>
      </div>
      <div className="date-container">
        <label>MONTH</label>
        <div className="input-container">
          <input type="number" />
        </div>
      </div>
      <div className="date-container">
        <label>YEAR</label>
        <div className="input-container">
          <input type="number" />
        </div>
      </div>
    </div>
  );
}

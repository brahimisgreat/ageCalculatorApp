import './Dmy.css'

export default function Dmy() {
  return (
    <div className="dmy-container">
      <div className="day-container">
        <label>DAY</label>
        <input type="number"></input>
      </div>
      <div className="month-container">
        <label>MONTH</label>
        <input type="number"></input>
      </div>
      <div className="year-container">
        <label>YEAR</label>
        <input type="number"></input>
      </div>
    </div>
  );
}

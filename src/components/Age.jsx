import "./Age.css";

export default function Age({day, month, year}) {

  //Gets current year, month, and day. store in variable
  const date = new Date();
  let currentDay = date.getDay();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  //results of year ,day, month inputs  -(substracted by) current date
  const newYear= currentYear - year
  const newMonth= currentMonth - month + 1
  const newDay= currentDay - day
  
  return (
    <div className="age-container">
      <div className="ymd">
        <p>{year ? newYear : '--'}</p> <h1>years</h1>
      </div>
      <div className="ymd">
        <p>{month ? newMonth : '--'}</p> <h1>months</h1>
      </div>
      <div className="ymd">
        <p>{day ? newDay : '--'}</p> <h1>days</h1>
      </div>
    </div>
  );
}

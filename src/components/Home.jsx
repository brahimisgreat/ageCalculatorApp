import "./Home.css";
import Dmy from "./Dmy";
import Age from "./Age";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  

  return (
    <div className="home">
      <Dmy setDay={setDay} day={day} month={month} setMonth={setMonth}  year={year} setYear={setYear}/>
      <Age day={day} month={month} year={year} />
    </div>
  );
}

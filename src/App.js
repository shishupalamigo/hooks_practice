import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {

  const [state, setState] = useState({
      count: 0,
      time: new Date()
    }
  ) 
  const count = state.count;
  const time = state.time;
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const updateCountAndTime = () => {
      setState(prevState => ({
        ...prevState,
        count : count + 1,
        time : new Date()        
      }))
    };
    window.addEventListener("click", updateCountAndTime);
    return () => {
      window.removeEventListener("click", updateCountAndTime);
    };
  });
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setCurrentTime(new Date());
  }
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <h2>{count}</h2>
      <h3>
        {count !== 0 ? `Last Clicked at - ${time.toLocaleTimeString()}` : ""}
      </h3>
      <h4>
        {" "}
        Its
        {(currentTime.getHours() < 10
          ? ` 0${currentTime.getHours()}`
          : ` ${currentTime.getHours()}`) +
          ":" +
          (currentTime.getMinutes() < 10
            ? `0${currentTime.getMinutes()}`
            : currentTime.getMinutes()) +
          ":" +
          (currentTime.getSeconds() < 10
            ? `0${currentTime.getSeconds()}`
            : currentTime.getSeconds())}{" "}
        Now
      </h4>
      <p>Click! anywhere on the window to update Count and Time</p>
    </div>
  );
}

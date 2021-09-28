import { useEffect, useState } from "react";
import "./App.css";
import Controls from "./Controls/Controls";
import ListHistory from "./ListHistory/ListHistory";
import Timer from "./Timer/Timer";

let interval = null;
function App() {
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(changeTime(0, 0, 0, 0));
  const [listHistory, setListHistory] = useState([]);
  // useEffect()

  const buttonStart = { color: "green", body: "Start", onClick: start };
  const buttonContinue = { color: "purple", body: "Continue", onClick: cont };
  const buttons = [
    { color: "red", body: "Stop", onClick: stop },
    { color: "yellow", body: "Reset", onClick: reset },
  ];

  let shownButtons = isStart
    ? [buttonContinue, ...buttons]
    : [buttonStart, ...buttons];

  function changeTime(hours, minutes, seconds, miliseconds) {
    return {
      hours,
      minutes,
      seconds,
      miliseconds,
    };
  }
  function addToHistory(time) {
    setListHistory([...listHistory, time]);
    console.log(Object.values(listHistory))
  }
  function timerBegin() {
    // setInterval(()=>changeTime(12,12,12,112), 1000)
  }

  function timerStop() {
    return "susus";
  }

  function start() {
    return setIsStart(true);
  }
  function cont() {
    return setIsStart(false);
  }
  function stop() {
    const timeObject = changeTime(1, 2, 3, 9);
    setIsStart(false);
    setTimer(timeObject);
    addToHistory(timeObject);
    return;
  }
  function reset() {
    setIsStart(false);
    addToHistory(timer);
  }

  function timeToString() {
    function withZero(number){
      return number.toString().padStart(2, '0');
    }
    function withWZero(number){
      return number.toString().padStart(4, '0');
    }
    return listHistory.map(({hours, minutes, seconds, miliseconds})=>
       `${withZero(hours)}:${withZero(minutes)}:${withZero(seconds)}:${withWZero(miliseconds)}`
    )
     
  };
  
  const list = timeToString()
  console.log(list)
  isStart ? timerBegin() : timerStop();

  return (
    <div className="container">
      <Timer currentTime='12;12;12;12'
      />
      <Controls setStart={setIsStart} buttons={shownButtons} />
      <ListHistory list={list} />
    </div>
  );
}

export default App;

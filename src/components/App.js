import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Controls/Controls';
import ListHistory from './ListHistory/ListHistory';
import Timer from './Timer/Timer';
import Audio from './Audio/Audio'

function App() {
  const [isTitimerStart, setIsTimerStart] = useState(false);
  const [time, setTime] = useState(0);
  const [listHistory, setListHistory] = useState([]);

  const buttonStart = { color: 'green', body: 'Start' };
  const buttonContinue = { color: 'purple', body: 'Continue' };
  const buttons = [
    { color: 'red', body: 'Stop' },
    { color: 'yellow', body: 'Reset' },
  ];

  let shownButtons = time === 0 
    ? [buttonStart, ...buttons]
    : [buttonContinue, ...buttons];

  function addToHistory(time) {
    setListHistory([...listHistory, time]);
    localStorage.setItem('times', JSON.stringify(listHistory));
  }

  useEffect(() => {
    let intervalId = null;
    if (isTitimerStart) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (!isTitimerStart) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isTitimerStart]);


  useEffect(() => {
        if(localStorage.getItem('times')) {
            setListHistory(JSON.parse(localStorage.getItem('times')));
        }
      }, []);


  const timeToString = () => {
    const hour = ('0' + Math.floor((time / 3600) % 100)).slice(-2);
    const minutes = ('0' + Math.floor((time / 60) % 60)).slice(-2);
    const seconds = ('0' + Math.floor((time) % 60)).slice(-2);
    return `${hour}:${minutes}:${seconds}`;
  };

  const timeString = timeToString();

  function onClick(value) {
    switch(value){
      case 'Stop':
      if (isTitimerStart) {
        setIsTimerStart(false);
        addToHistory(timeString);
      }
        break;
      case 'Reset':
        if (time === 0) return;
        setTime(0);
        setIsTimerStart(false);
        addToHistory(timeString);
        break;
      default:
        setIsTimerStart(true);
    }
  }


  return (
    <div className='container'>
      {isTitimerStart &&
      <Audio autoplay={true}/>
      }
      
      <Timer currentTime={timeString} />
      <Controls buttons={shownButtons} onClick={onClick} />
      {!!listHistory.length && 
      <ListHistory list={listHistory} />}
    </div>
  );
}

export default App;
// Unfortunatly WH not fully complited
// without milliseconds, 
// event listener does not work correctly with timeout 10 ms.
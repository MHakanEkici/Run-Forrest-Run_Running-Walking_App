import {useState} from 'react';

export default function useStopwatch() {
  const [time, setTime] = useState({second: 0, minute: 0});
  const [interv, setInterv] = useState();

  const startStopwatch = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  var updatedSecond = time.second,
    updatedMinute = time.minute;

  const run = () => {
    if (updatedSecond === 60) {
      updatedMinute++;
      updatedSecond = 0;
    }
    updatedSecond++;
    return setTime({second: updatedSecond, minute: updatedMinute});
  };

  const stopStopwatch = () => {
    clearInterval(interv);
  };

  return {
    time,
    startStopwatch,
    stopStopwatch,
  };
}

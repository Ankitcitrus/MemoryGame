import {useState, useLayoutEffect} from 'react';

/**
 * UseTimer Hook to show the timer
 * @param {number} time
 */
const useTimer = time => {
  const [seconds, setSeconds] = useState(time);
  const [isActive, setIsActive] = useState(true);
  const startTimer = interval => {
    setSeconds(seconds => {
      if (seconds === 1) {
        setIsActive(false);
        clearInterval(interval);
      }
      return seconds - 1;
    });
  };
  /**
   * Hook used to call once for starting the timer(componentDidMount)
   */
  useLayoutEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => startTimer(timer), 1000);
    }
    return () => clearInterval(timer); // when unmount
  }, [isActive, seconds]);
  return [seconds, isActive];
};

export default useTimer;

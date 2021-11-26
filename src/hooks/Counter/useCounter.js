/*
Created by: kathe
On: 25-Nov-21 : 25-Nov-21
Project: ch15-custom-hooks
*/
import { useEffect, useState } from 'react';

const useCounter = (forwards) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (forwards ? prevCounter + 1 : prevCounter - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;

// import { useState, useEffect } from 'react';

import Card from '../Card/Card';
import useCounter from '../../hooks/Counter/useCounter';

const ForwardCounter = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;

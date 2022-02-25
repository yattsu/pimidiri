import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { formatSeconds } from '../util';

export const Timer = ({ time, handleSetTime, paused }) => {
  const [intervalContainer, setIntervalContainer] = useState(null);

  useEffect(() => {
    if(paused == false && !intervalContainer) {
      const interval = setInterval(decrementTime, 1000);
      setIntervalContainer(interval);
    }

    if(paused && intervalContainer) {
      clearInterval(intervalContainer)
      setIntervalContainer(null)
    }
  }, [paused])

  const decrementTime = () => {
    handleSetTime(time => time - 1);
    console.log(time)
  }

  return(
    <>
      <Typography
        variant='h1'
        fontWeight='bold'
        color='primary.light'
      >
        {
          formatSeconds(time)
        }
      </Typography>
    </>
  )
}

import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { formatSeconds } from '../util';

export const Timer = ({ time, lastTime, handleSetTime, isBreak, handleSetBreak, breakTime, paused, handlePaused, reset, handleSetReset, handlePlayBeep }) => {
  const [intervalContainer, setIntervalContainer] = useState(null);

  useEffect(() => {
    if(time == 0) {
      handlePlayBeep()
      handleSetBreak()
      if(isBreak) {
        resetTimer()
      }
    }
  }, [time])

  useEffect(() => {
    if(isBreak) {
      handleSetTime(breakTime)
    }
  }, [isBreak])

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

  useEffect(() => {
    if(!reset) {
      return
    }

    resetTimer();
  }, [reset])

  const resetTimer = () => {
    clearInterval(intervalContainer);
    setIntervalContainer(null);
    handleSetTime(lastTime);
    handleSetReset(false);
    handlePaused();
  }

  const decrementTime = () => {
    handleSetTime(time => time - 1);
  }

  return(
    <>
      <Typography
        variant='h1'
        fontWeight='bold'
        color={isBreak ? 'warning.main' : 'primary.light'}
      >
        {
          formatSeconds(time)
        }
      </Typography>
    </>
  )
}

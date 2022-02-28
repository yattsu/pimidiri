import { useState } from 'react';
import useSound from 'use-sound';
import beepSound from '../src/sounds/alarm.wav';

import { Box, Button } from '@mui/material';

import { Timer } from './components/Timer';
import { TimeOptions } from './components/TimeOptions';
import { BreakOptions } from './components/BreakOptions';
import { PlayPauseButton } from './components/PlayPauseButton';
import { ResetButton } from './components/ResetButton';

const App = () => {
  const [time, setTime] = useState(25 * 60);
  const [lastTime, setLastTime] = useState(15 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [paused, setPaused] = useState(null);
  const [reset, setReset] = useState(false);
  const [playBeep] = useSound(beepSound);

  const handleSetTime = (seconds) => {
    setTime(seconds)
  }

  const handleSetBreak = () => {
    setIsBreak(isBreak => !isBreak);
  }

  const handleTimeOptionClick = (seconds) => {
    if (paused == false) {
      return
    }

    setTime(seconds)
    setLastTime(seconds)
    setPaused(null)
  }

  const handleBreakOptionClick = (seconds) => {
    setBreakTime(seconds)
  }

  const handlePaused = () => {
    if(paused == null) {
      setPaused(false)
    } else {
      setPaused(!paused)
    }
  }

  const handleSetReset = () => {
    setReset(reset => !reset);
    handleSetBreak();
  }

  const handlePlayBeep = () => {
    playBeep()
  }

  return(
      <Box
        display='flex'
        sx={{
          backgroundColor:isBreak ? 'warning.light' : 'primary.dark',
          position:'absolute',
          left:0,
          top:0,
          minWidth:'100%',
          minHeight:'100%',
          overflow:'hidden',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'15px'
        }}
      >
        <Timer time={time} handleSetTime={handleSetTime} lastTime={lastTime} isBreak={isBreak} handleSetBreak={handleSetBreak} breakTime={breakTime} paused={paused} handlePaused={handlePaused} reset={reset} handleSetReset={handleSetReset} handlePlayBeep={handlePlayBeep} />
        <TimeOptions handleTimeOptionClick={handleTimeOptionClick} isBreak={isBreak} />
        <BreakOptions handleBreakOptionClick={handleBreakOptionClick} isBreak={isBreak} />
        <Box
          display='flex'
          sx={{
          gap:'25px'
          }}
        >
          <PlayPauseButton paused={paused} handlePaused={handlePaused} isBreak={isBreak} />
          {
          paused
            ?
              <ResetButton handleSetReset={handleSetReset} isBreak={isBreak} />
            :
              null
          }
        </Box>
      </Box>
  )
}

export default App;

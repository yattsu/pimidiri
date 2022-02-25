import { useState } from 'react';

import { Box, Button } from '@mui/material';

import { Timer } from './components/Timer';
import { TimeOptions } from './components/TimeOptions';
import { PlayPauseButton } from './components/PlayPauseButton';

const App = () => {
  const [time, setTime] = useState(15 * 60);
  const [paused, setPaused] = useState(null);

  const handleSetTime = (seconds) => {
    setTime(seconds)
  }

  const handleTimeOptionClick = (seconds) => {
    if (paused == false) {
      return
    }

    setTime(seconds)
    setPaused(null)
  }

  const handlePaused = () => {
    if(paused == null) {
      setPaused(false)
    } else {
      setPaused(!paused)
    }
  }

  return(
      <Box
        display='flex'
        sx={{
          backgroundColor:'primary.dark',
          position:'absolute',
          left:0,
          top:0,
          minWidth:'100%',
          minHeight:'100%',
          overflow:'hidden',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Timer time={time} handleSetTime={handleSetTime} paused={paused} />
        <TimeOptions handleTimeOptionClick={handleTimeOptionClick} />
        <PlayPauseButton paused={paused} handlePaused={handlePaused} />
      </Box>
  )
}

export default App;

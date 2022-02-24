import { useState } from 'react';

import { Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Timer } from './components/Timer';
import { PlayPauseButton } from './components/PlayPauseButton';

const App = () => {
  const [time, setTime] = useState(15 * 60 + 10);

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
        <Timer time={time} />
        <PlayPauseButton />
      </Box>
  )
}

export default App;

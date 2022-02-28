import { StartRounded, PlayArrowRounded, PauseRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

export const PlayPauseButton = ({ paused, handlePaused, isBreak }) => {
  return(
    <>
      <Button
        onClick={handlePaused}
        sx={{
          hover:{
            backgroundColor:'warning.dark'
          },
          color:isBreak ? 'warning.main' : 'primary',
          backgroundColor:'warning.light',
          borderRadius:'1000px',
        }}
      >
        { paused == null ? <StartRounded /> : paused ? <PlayArrowRounded /> : <PauseRounded /> }
      </Button>
    </>
  )
}

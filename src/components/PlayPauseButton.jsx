import { Button } from '@mui/material';

export const PlayPauseButton = ({ paused, handlePaused }) => {
  return(
    <>
      <Button
        onClick={handlePaused}
        sx={{
          backgroundColor:'warning.light',
          borderRadius:'1000px',
        }}
      >
        { paused ? 'START' : 'PAUSE' }
      </Button>
    </>
  )
}

import { Typography } from '@mui/material';
import { formatSeconds } from '../util';

export const BreakOption = ({ seconds, handleBreakOptionClick, isBreak }) => {
  return(
    <Typography
      onClick={() => {handleBreakOptionClick(seconds)}}
      variant='h6'
      color={isBreak ? 'warning.main' : 'primary.light'}
      sx={{
        cursor:'pointer',
      }}
    >
      { formatSeconds(seconds) }
    </Typography>
  )
}

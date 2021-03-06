import { Typography } from '@mui/material';
import { formatSeconds } from '../util';

export const TimeOption = ({ seconds, handleTimeOptionClick, isBreak }) => {
  return(
    <Typography
      onClick={() => {handleTimeOptionClick(seconds)}}
      variant='h6'
      color={isBreak ? 'warning.main' : 'primary.light'}
      sx={{
        cursor:'pointer'
      }}
    >
      { formatSeconds(seconds) }
    </Typography>
  )
}

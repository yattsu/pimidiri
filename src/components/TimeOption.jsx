import { Typography } from '@mui/material';
import { formatSeconds } from '../util';

export const TimeOption = ({ seconds, handleTimeOptionClick }) => {
  return(
    <Typography
      onClick={() => {handleTimeOptionClick(seconds)}}
      variant='h5'
      color='primary.light'
      sx={{
        cursor:'pointer'
      }}
    >
      { formatSeconds(seconds) }
    </Typography>
  )
}

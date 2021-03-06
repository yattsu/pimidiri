import { Box, Typography } from '@mui/material';
import { TimeOption } from './TimeOption';

export const TimeOptions = ({ handleTimeOptionClick, isBreak }) => {
  return(
    <>
      <Box
        sx={{
          minWidth:'25%',
          maxWidth:'25%',
        }}
      >
        <Typography
          variant='h5'
          color={isBreak ? 'warning.main' : 'primary.light'}
        >
          Time
        </Typography>
        <Box
          display='flex'
          sx={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:'50px'
          }}
        >
          <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={25 * 60} isBreak={isBreak} />
          <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={35 * 60} isBreak={isBreak} />
          <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={45 * 60} isBreak={isBreak} />
        </Box>
      </Box>
    </>
  )
}

import { Box, Typography } from '@mui/material';
import { BreakOption } from './BreakOption';

export const BreakOptions = ({ handleBreakOptionClick, isBreak }) => {
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
          sx={{
            textAlign:'left',
          }}
        >
          Break
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
          <BreakOption handleBreakOptionClick={handleBreakOptionClick} seconds={5 * 60} isBreak={isBreak} />
          <BreakOption handleBreakOptionClick={handleBreakOptionClick} seconds={10 * 60} isBreak={isBreak} />
          <BreakOption handleBreakOptionClick={handleBreakOptionClick} seconds={15 * 60} isBreak={isBreak} />
        </Box>
      </Box>
    </>
  )
}

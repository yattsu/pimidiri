import { Box } from '@mui/material';
import { TimeOption } from './TimeOption';

export const TimeOptions = ({ handleTimeOptionClick }) => {
  return(
    <>
      <Box
        display='flex'
        sx={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          width:'50%'
        }}
      >
        <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={15 * 60} />
        <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={25 * 60} />
        <TimeOption handleTimeOptionClick={handleTimeOptionClick} seconds={30 * 60} />
      </Box>
    </>
  )
}

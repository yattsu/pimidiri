import { Button } from '@mui/material';
import { RotateLeftRounded } from '@mui/icons-material';

export const ResetButton = ({ handleSetReset, isBreak }) => {
  return(
    <Button
      onClick={handleSetReset}
      sx={{
        hover:{
          backgroundColor:'warning.dark'
        },
        color:isBreak ? 'warning.main' : 'primary',
        backgroundColor:'warning.light',
        borderRadius:'1000px',
      }}
    >
      <RotateLeftRounded />
    </Button> 
  )
}

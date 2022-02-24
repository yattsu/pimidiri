import { Typography } from '@mui/material';

export const Timer = ({ time }) => {
  return(
    <>
      <Typography
        variant='h1'
        fontWeight='bold'
        color='primary.light'
      >
        {
          (Math.floor(time / 60) + ":" + ((time % 60).toString.length == 1 ? '0' + (time % 60) : time % 60))
        }
      </Typography>
    </>
  )
}

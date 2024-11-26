import {Box, Typography} from '@mui/material';

const Footer = _ => {
  return (
    <Box pb={4}>
      <Typography variant='h6' align='center'>Developed by Aayush &amp; Team</Typography>
      <Typography variant='h6' align='center'>
        <a href="https://github.com/dnyaneshwarwagh0072/cinematic" target="_blank" rel="noreferrer">
          Github Source Code
        </a>
      </Typography>
    </Box>
  )
}

export default Footer;

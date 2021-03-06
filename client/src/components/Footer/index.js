// Importing necessary elements from Material UI
import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core'

const Footer = () => {
  return (
    <Box 
    px={{ xs: 3, sm: 10}}
    py={{ xs: 5, sm: 10}}
    bgcolor="text.secondary" color="white">
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href="/" color="inherit">
              Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
              Support
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
              Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link href="/login" color="inherit">
                Login
              </Link>
            </Box>
            <Box>
              <Link href="/search" color="inherit">
                Wikipedia Search
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Messages</Box>
            <Box>
              <Link href="/" color="inherit">
                Backup
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                History
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Roll
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt= {{xs: 5, sm: 10}} pb= {{xs: 5, sm: 0}}>
        Z The Historian &reg; {new Date().getFullYear}
        </Box>
      </Container>
    </Box>
)};

export default Footer;

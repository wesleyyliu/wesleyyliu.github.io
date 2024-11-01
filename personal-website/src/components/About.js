import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import ProfilePic from '../pfp.jpg';

const About = () => {
  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Stack spacing={10} direction='column' alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ maxWidth: 600 }}>
              About Me
            </Typography>
          <Stack spacing={4} direction='row' alignItems="center" textAlign="center">
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600 }}>
                Hey! I'm Wesley. I am a sophomore studying Computer Science at the University of Pennsylvania. 
            </Typography>
            <Box
                component="img"
                sx={{
                // height: 233,
                // width: 350,
                maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
                }}
                alt="Wesley Liu profile picture"
                src={ProfilePic} 
            />
          </Stack>
          
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
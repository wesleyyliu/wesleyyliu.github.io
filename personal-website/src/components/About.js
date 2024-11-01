import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import ProfilePic from '../pfp.jpg';

const About = () => {
  return (
    <Container sx={{bgcolor: 'primary.main'}} maxWidth={false}>
      <Box sx={{ py: 5, bgcolor: 'primary.main'}}>
        <Stack spacing={10} direction='column' alignItems="center" textAlign="center">
            <Typography variant="h2" color='secondary'>
              About
            </Typography>
          <Stack spacing={20} direction='row' alignItems="center" textAlign="center">
            <Typography variant="h5" color="secondary" sx={{ maxWidth: 600 }}>
                Hey! I'm Wesley. I am a sophomore studying Computer Science at the University of Pennsylvania. In my free time, I like cooking, eating, working out, playing poker, and trying new things!
            </Typography>
            <Box
                component="img"
                sx={{
                maxHeight: { xs: 250, md: 250 },
                maxWidth: { xs: 250, md: 250 },
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
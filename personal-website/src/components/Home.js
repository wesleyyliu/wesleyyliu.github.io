import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import NeuralNetwork from './NeuralNetwork';

const Home = () => {
  return (
    <Container sx={{ bgcolor: 'primary.main'}} maxWidth={false}>
      <Box 
        sx={{ 
          px: 10, 
          height: '100vh', 
          bgcolor: 'primary.main'
        }} 
        display="flex"
        alignItems="center"
      >
        <Stack spacing={4} direction='row'>
          <Stack spacing={4} direction='column' alignItems='left' textAlign='left'>
            <Typography variant='h3' color='secondary'>
              Hey, I'm
            </Typography>
            <Typography variant='h1' color='secondary'>
              Wesley
            </Typography>
            <Typography variant='h3' color='secondary'>
              I like data and machine learning.
            </Typography>
          </Stack>
          <Box sx={{}}>
            <NeuralNetwork />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
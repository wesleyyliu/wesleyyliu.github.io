import React from 'react';
import { Container, Typography, Box, Stack, CardMedia, Card } from '@mui/material';
import ProjectCard from './ProjectCard';


const About = () => {
  return (
    <Container sx={{bgcolor: 'primary.main'}} maxWidth={false}>
      <Box sx={{ py: 5, bgcolor: 'primary.main'}}>
        <Stack spacing={10} direction='column' alignItems="center" textAlign="center">
            <Typography variant="h2" color='secondary'>
              Projects
            </Typography>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> 
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
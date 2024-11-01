import React from 'react';
import { Box, Container, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'background.bars' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2}>
            <IconButton color="secondary" href="https://github.com/wesleyyliu">
              <GitHub />
            </IconButton>
            <IconButton color="secondary" href="https://www.linkedin.com/in/wesley-liu-067518212/">
              <LinkedIn />
            </IconButton>
            <IconButton color="secondary" href="mailto:wesley.yiming.liu@gmail.com">
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
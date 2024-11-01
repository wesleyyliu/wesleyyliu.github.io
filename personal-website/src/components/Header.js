import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky" bgcolor='background.default'>
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Wesley Liu
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
    </Toolbar>
    </AppBar>
  );
}

export default Header;
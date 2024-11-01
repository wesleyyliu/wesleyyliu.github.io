import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const scroll = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};
function Header() {
  return (
    <AppBar position="sticky" bgcolor='background.bars' sx={{ zIndex: 0 }}>
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Wesley Liu
        </Typography>
        <Button color="inherit" onClick={() => scroll('home')}>Home</Button>
        <Button color="inherit" onClick={() => scroll('about')}>About</Button>
        <Button color="inherit" onClick={() => scroll('projects')}>Projects</Button>
        <Button color="inherit" onClick={() => scroll('contact')}>Contact</Button>
    </Toolbar>
    </AppBar>
  );
}

export default Header;
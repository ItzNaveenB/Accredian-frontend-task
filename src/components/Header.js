import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, Box, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left side - Courses Dropdown */}
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<MenuIcon />}
              onClick={handleMenuOpen}
            >
              Courses
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>React for Beginners</MenuItem>
              <MenuItem onClick={handleMenuClose}>Advanced JavaScript</MenuItem>
              <MenuItem onClick={handleMenuClose}>Full-Stack Development</MenuItem>
              {/* Add more courses as needed */}
            </Menu>
          </Box>

          {/* Right side - Navbar Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="inherit" sx={{ mx: 1 }}>Refer & Earn</Button>
            <Button color="inherit" sx={{ mx: 1 }}>Resources</Button>
            <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
            <Button color="inherit" sx={{ mx: 1 }}>Login</Button>
            <Button variant="contained" color="primary" sx={{ mx: 1 }}>Try for Free</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

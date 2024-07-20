import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container maxWidth="md">
        <Typography variant="body1">
          © 2024 Refer & Earn, Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

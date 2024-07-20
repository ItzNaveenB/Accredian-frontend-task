import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ReferralTable from './components/ReferralTable';
import ReferralFormModal from './components/ReferralFormModal';

const App = () => {
  const [open, setOpen] = useState(false);
  const [referrals, setReferrals] = useState([
    // Example data
    {
      id: 1,
      referrerName: 'John Doe',
      referrerEmail: 'john.doe@example.com',
      refereeName: 'Jane Smith',
      refereeEmail: 'jane.smith@example.com',
      courseName: 'React for Beginners',
      courseUrl: 'https://example.com/react-for-beginners',
    },
    // Add more example data as needed
  ]);

  // Function to open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ pt: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
            Refer & Earn
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: '#34495e', mb: 4 }}>
            Share the joy of learning with others and earn rewards!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClickOpen}
            sx={{ borderRadius: '20px', px: 4, py: 2, textTransform: 'none' }}
          >
            Refer Now
          </Button>
        </Box>
        <ReferralTable referrals={referrals} />
        <ReferralFormModal open={open} handleClose={handleClose} />
      </Container>
      <Footer />
    </div>
  );
};

export default App;

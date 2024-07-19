import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Container, Box, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: '#f5f5f5', color: '#2c3e50' }}>
          Refer a Course
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="referrerName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referrer Name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referrer Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.referrerName}
                      helperText={errors.referrerName ? errors.referrerName.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="referrerEmail"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referrer Email is required', pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Invalid email address' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referrer Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.referrerEmail}
                      helperText={errors.referrerEmail ? errors.referrerEmail.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="referrerMobile"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referrer Mobile Number is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referrer Mobile Number"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.referrerMobile}
                      helperText={errors.referrerMobile ? errors.referrerMobile.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="refereeName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referee Name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referee Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.refereeName}
                      helperText={errors.refereeName ? errors.refereeName.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="refereeEmail"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referee Email is required', pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Invalid email address' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referee Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.refereeEmail}
                      helperText={errors.refereeEmail ? errors.refereeEmail.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="refereeMobile"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referee Mobile Number is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referee Mobile Number"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.refereeMobile}
                      helperText={errors.refereeMobile ? errors.refereeMobile.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="courseName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Course Name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Course Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.courseName}
                      helperText={errors.courseName ? errors.courseName.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="courseUrl"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Course URL is required', pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: 'Invalid URL' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Course URL"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.courseUrl}
                      helperText={errors.courseUrl ? errors.courseUrl.message : ''}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="referralMessage"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Referral Message"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      rows={4}
                      sx={{ bgcolor: '#fff' }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default App;

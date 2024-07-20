import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const programs = [
  { id: 1, programName: 'React for Beginners' },
  { id: 2, programName: 'Advanced JavaScript' },
  { id: 3, programName: 'Full-Stack Development' },
  // Add more programs as needed
];

const referralBonuses = [
  { id: 1, programName: 'React for Beginners', referrerBonus: '$50', refereeBonus: '$20' },
  { id: 2, programName: 'Advanced JavaScript', referrerBonus: '$60', refereeBonus: '$25' },
  { id: 3, programName: 'Full-Stack Development', referrerBonus: '$80', refereeBonus: '$30' },
  // Add more bonus details as needed
];

const ReferralTable = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          All Programs
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table sx={{ minWidth: 650 }} aria-label="all programs table">
            <TableHead>
              <TableRow>
                <TableCell>Program Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programs.map((program) => (
                <TableRow key={program.id}>
                  <TableCell>{program.programName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Referral Bonuses
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="referral bonuses table">
            <TableHead>
              <TableRow>
                <TableCell>Program Name</TableCell>
                <TableCell align="right">Referrer Bonus</TableCell>
                <TableCell align="right">Referee Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referralBonuses.map((bonus) => (
                <TableRow key={bonus.id}>
                  <TableCell>{bonus.programName}</TableCell>
                  <TableCell align="right">{bonus.referrerBonus}</TableCell>
                  <TableCell align="right">{bonus.refereeBonus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ReferralTable;

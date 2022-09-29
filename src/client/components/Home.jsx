import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Calendar from './Calendar';
import PrescriptionContainer from './PrescriptionContainer';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Typography sx={{ fontSize: 36 }} color="text.primary" gutterBottom>
        Medication Information
      </Typography>
      <Button variant="contained" onClick={() => navigate('/createpage')}>Create</Button>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {/* <Grid xs={12} md={6}>
          <Calendar />
        </Grid> */}
        <Grid xs={12} md={12}>
          <PrescriptionContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

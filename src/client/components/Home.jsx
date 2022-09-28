import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Calendar from './Calendar';
import PrescriptionContainer from './PrescriptionContainer';

const Home = () => {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid xs={12} md={6}>
          <Calendar />
        </Grid>
        <Grid xs={12} md={6}>
          <PrescriptionContainer />
        </Grid>
      </Grid>
    </Container>
    // <section className="home">
    //   
    //   <PrescriptionContainer />
    // </section>
  );
};

export default Home;

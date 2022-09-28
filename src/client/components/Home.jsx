import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import PrescriptionContainer from './PrescriptionContainer';

const Home = () => {

  return (
    <section className="home">
      <Calendar />
      <PrescriptionContainer />
    </section>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  return (
    <section className="home">
       <Calendar />
       <PrescriptionContainer />
    </section>
  );
};

export default Home;

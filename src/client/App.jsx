import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './components/Create';
import LandingPage from './components/Landing';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/createpage" element={<CreatePage />} /> */}
      {/* <Route path="/homepage" element={<Homepage />} /> */}
    </Routes>
  )
}

export default App;
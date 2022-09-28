import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './stylesheets/styles.scss';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={
        <main>
          <h1>Welcome to MedCal!</h1>
        </main>
      } />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App;
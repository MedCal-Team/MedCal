import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={
        <main>
          <h1>Welcome to MedCal!</h1>
        </main>
      } />
      {/* <Route path="/homepage" element={<Homepage />} /> */}
    </Routes>
  )
}

export default App;
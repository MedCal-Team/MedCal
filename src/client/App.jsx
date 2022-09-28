import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';
import LandingPage from './components/Landing';
import CreatePage from './components/Create';
import './stylesheets/styles.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7DC3AD',
    },
    secondary: {
      main: '#c37d93',
    },
     // Provide every color token (light, main, dark, and contrastText) when using
     // custom colors for props in Material UI's components.
     // Then you will be able to use it like this: `<Button color="custom">`
    custom: {
      light: '#c0e9ef',
      main: '#7db6c3',
      dark: '#647d81',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    tonalOffset: 0.2,
  },
})

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createpage" element={<CreatePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
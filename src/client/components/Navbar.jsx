import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import LandingPage from './Landing';
import { Button } from '@mui/material';
import { Medication } from '@mui/icons-material'
import '../stylesheets/navbar.scss';

const Navbar = () => {
  const [isLogInOpen, setLogInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  
  const signUp = () => {
    setSignUpOpen(true);
  }

  const logIn = () => {
    setLogInOpen(true);
  }
  return (
    <div className='NavBar'>
      <div className='Title'>
        <Medication fontSize="inherit"/> MedCal
      </div>
      <Button
        onClick={signUp} 
        variant="contained"
        sx={{ my: 4, mx: 13, color: 'white', 'font-size': '15px' }}
        >
        Sign Up
      </Button>
      <Button
      onClick={logIn} 
      variant="contained"
      sx={{ my: 4, mx: 13, color: 'white', 'font-size': '15px' }}
      >
      Log in
    </Button>
      <SignUpModal open={isSignUpOpen} onClose={() => setSignUpOpen(false)}/>
      <LogInModal open={isLogInOpen} onClose={() => setLogInOpen(false)}/>
    </div>
  )
}

export default Navbar;
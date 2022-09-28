import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';
import LandingPage from './Landing';
import { Button } from '@mui/material';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const signUp = () => {
    setOpen(true);
  }

  const logIn = () => {
    setOpen(true);
  }
  return (
    <div className='NavBar'>
      <div className='Title'>MedCal</div>
      <Button
        onClick={signUp} 
        variant="contained"
        sx={{ my: 4, mx: 13, color: 'white', 'font-size': '15px' }}
        >
        Sign Up
      </Button>
      <Button
      onClick={logIn} 
      variant="contained">
      Log in
    </Button>
      <SignUpModal open={open} onClose={() => setOpen(false)}/>
      <LogInModal open={open} onClose={() => setOpen(false)}/>
    </div>
  )
}

export default Navbar;
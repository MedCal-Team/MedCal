import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import LogInModal from './LogInModal';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='NavBar'>
      <div className='Title'>MedCal</div>
      <Button
        onClick={setOpen} 
        sx={{ color: 'white', mx: 2, 'text-transform': 'none', 'font-size': '15px'  }}>
        Sign Up
      </Button>
      <Button
      onClick={setOpen} 
      sx={{ color: 'white', mx: 2, 'text-transform': 'none', 'font-size': '15px'  }}>
      Log in
    </Button>
      <SignUpModal open={open} onClose={() => setOpen(false)}/>
      <LogInModal open={open} onClose={() => setOpen(false)}/>
    </div>
  )
}

export default Navbar;
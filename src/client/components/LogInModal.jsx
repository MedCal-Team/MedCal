import React from 'react';
import { Button, Box, Modal, Typography, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 350,
  bgcolor: 'background.paper',
  border: '3px sold #000',
  boxShadow: 24,
  p: 4,
};

const LogInModal = ({ open, onClose }) => {
  const handleLogInUser = async (e) => {
    // prevent default 
    e.preventDefault();
    console.log('invoked?')
    const logInData = {
      username: username,
      password: password
    }
    try {
      // are we sure it should be /homepage and not /create?
      const response = await fetch('/homepage', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logInData)
      })
    } catch {
      // figure out error handling here
      console.log('error with logging in')
    }
  };
  return (
    <div className='LogIn'>
      <Modal 
        open={open}
        onClose={onClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button variant='contained' sx={{ my: 4, mx: 13 }} onClick={handleLogInUser}>Log in</Button>
          </Box>
      </Modal>
    </div>
  )    
}

export default LogInModal;
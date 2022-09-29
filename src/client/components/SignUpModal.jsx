import React, { useState } from 'react';
import { Button, Box, Modal, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import actions from '../actions/actions';

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

const SignUpModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const handleAddUser = async (e) => {
    // prevent default 
    e.preventDefault();
    console.log('invoked?')
    const submitData = {
      username: user,
      password: pass
    };
    try {
      // are we sure it should be /homepage and not /create?
      const response = await fetch('/api/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      })
      console.log('are we signed up? :', response);
      if(response.status === 200){
        console.log('entered if statement')
      }
      dispatch(actions.signUp(user));
      navigate('/home');
    } catch {
      // figure out error handling here
      console.log('error with signing up')
    }
  }
  return (
    <div className='SignUp'>
      <Modal 
        open={open}
        onClose={onClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Please enter your desired username and password below
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id='username'
                label='username'
                variant='standard'
                value={user}
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                id='password'
                label='password'
                variant='standard'
                value={pass} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </Typography>
            <Button variant='contained' sx={{ my: 4, mx: 13 }} onClick={handleAddUser}>Sign Up</Button>
          </Box>
      </Modal>
    </div>
  )    
}

export default SignUpModal;
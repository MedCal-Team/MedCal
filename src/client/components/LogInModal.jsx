import React, { useState } from 'react';
import { Button, Box, Modal, Typography, TextField } from '@mui/material';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import actions from '../actions/actions';
import { useNavigate } from 'react-router';

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

// when user clicks/submits, trigger a fetch req (/api/login)
// if successful, then trigger another fetch req (/api/homepage)
// if successful, then trigger the action creator login (which will update the store)

const LogInModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const handleLogInUser = async (e) => {
    // prevent default 
    e.preventDefault();
    console.log('invoked?')
    const logInData = {
      username: user,
      password: pass
    }
    try {
      const response = await fetch('/api/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logInData)
      })
      // console.log('issue here?')
      // const successfulResponse = await response.json();
      console.log('are we logged in? :', response);
      if(response.status === 200){
        console.log('entered if statement')
        const getInfo = await fetch('/api/homepage')
        console.log('Are we here?');
        const medData = await getInfo.json();
        console.log('Did we get the homepage info? :', medData);
        dispatch(actions.logIn(user, medData));
        navigate('/home');
      }
    } catch {
      // figure out error handling here
      console.log('error with logging in')
    }
  };
  return (
      <div className='SignUp'>
        <Modal 
          open={open}
          onClose={onClose}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              Please enter your username and password below
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
              <Button variant='contained' sx={{ my: 4, mx: 13 }} onClick={handleLogInUser}>Log in</Button>
            </Box>
        </Modal>
      </div>
    )  
}


export default LogInModal;
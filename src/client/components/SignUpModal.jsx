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

const SignUpModal = ({ open, onClose }) => {
  const handleAddUser = async (e) => {
    // prevent default 
    e.preventDefault();
    console.log('invoked?')
    const submitData = {
      username: username,
      password: password
    };
    try {
      // are we sure it should be /homepage and not /create?
      const response = await fetch('/homepage', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      })
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
                value={username} />
            </Typography>
            <Button variant='contained' sx={{ my: 4, mx: 13 }} onClick={handleAddUser}>Sign Up</Button>
          </Box>
      </Modal>
    </div>
  )    
}

export default SignUpModal;
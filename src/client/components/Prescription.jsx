import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import UpdateModal from './UpdateModal';
import actions from '../actions/actions.js';

const Prescription = (props) => {
  // local state to store if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // deconstruct all medication information from props
  // question: which information should show?
  // if we don't have a calendar feature, should it be everything?
  const { 
    title, 
    medName, 
    medDesc, 
    start, 
    frequency, 
    administrationTime, 
    doses, 
    updateCalendar 
  } = props.med;

  const updateMed = () => {
    setIsModalOpen(true);
  }


  return (
    <Card sx={{ minWidth: 275 }}>
      <UpdateModal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Med Info
          </Typography>
          <Typography variant="h5" component="div">
            {medName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Doses: {doses}
          </Typography>
          <Typography variant="body2">
            {medDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={updateMed}>Edit</Button>
          <IconButton variant="contained" onClick={dispatch(actions.deleteMedThunk(medName))} size="large">
            <DeleteForever fontSize="inherit"/>
          </IconButton>
        </CardActions>
      </Card>
  );
};

export default Prescription;
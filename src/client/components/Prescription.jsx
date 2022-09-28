import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
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
    <section className="medCard">
      <ul>
        <li>Medication: {medName}</li>
        <li>Description: {medDesc}</li>
        <li>Number of doses: {doses}</li>
      </ul>
      <UpdateModal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      <div className="buttons">
        <Button variant="contained" onClick={updateMed}>Edit</Button>
        <IconButton variant="contained" onClick={dispatch(actions.deleteMedThunk(medName))} size="large">
          <DeleteForever fontSize="inherit"/>
        </IconButton>
      </div>
    </section>
  );
};

export default Prescription;
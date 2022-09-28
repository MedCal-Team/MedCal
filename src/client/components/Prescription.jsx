import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton, DeleteIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import actions from '../actions/actions.js';

const Prescription = (props) => {
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

  return (
    <section className="medCard">
      <ul>
        <li>Medication: {medName}</li>
        <li>Description: {medDesc}</li>
        <li>Number of doses: {doses}</li>
      </ul>
      <div className="buttons">
        <Button variant="contained">Edit</Button>
        <IconButton variant="contained" onClick={dispatch(actions.deleteMedThunk(medName))}>
          <DeleteIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default Prescription;
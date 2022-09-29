import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Prescription from './Prescription';

// const dummyData = [
//   {
//     medName: 'Medicine 1',
//     medDesc: 'A description of the medicine',
//     doses: 15
//   },
//   {
//     medName: 'Medicine 2',
//     medDesc: 'Another description of the medicine',
//     doses: 35
//   },
//   {
//     medName: 'Medicine 3',
//     medDesc: 'Yet another description of the medicine',
//     doses: 49
//   }
// ]

const PrescriptionContainer = () => {

  // Note: if the store is updated upon login, this will work!
  // TODO: modify actions and reducers to put fetch request upon log in!
  // the login action should trigger a change in the medList with data from the server
  const { medList } = useSelector((state) => state.meds);
  console.log('Medlist:', medList);

  const medCards = medList.map((med, index) => {
    return (
      <Grid sm={12} lg={6} key={index}>
        <Prescription
          med={med}
          key={'med' + (index + 1)}
        />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} >
        {medCards}
      </Grid>
    </Box>
  );
};

export default PrescriptionContainer;
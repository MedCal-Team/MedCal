import React from 'react';
import { useSelector } from 'react-redux';
import Prescription from './Prescription';

const PrescriptionContainer = () => {

  // Note: if the store is updated upon login, this will work!
  // TODO: modify actions and reducers to put fetch request upon log in!
  // the login action should trigger a change in the medList with data from the server
  const medList = useSelector((state) => state.medList);

  const medCards = medList.map((med, index) => {
    return (
      <Prescription
        med={med}
        key={'med' + (index + 1)}
      />
    );
  });

  return (
    <section className="medSection">
      <h3>My Prescriptions</h3>
      <div className="medContainer">
        {medCards}
      </div>
    </section>
  );
};

export default PrescriptionContainer;
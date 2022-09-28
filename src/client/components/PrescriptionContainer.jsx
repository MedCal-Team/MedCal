import React from 'react';
import { useSelector } from 'react-redux';

const PrescriptionContainer = () => {

  // returns the current username and medList for that user
  const username = useSelector((state) => state.username);
  // Note: need to update the store with medList upon log in
  // TODO: modify actions and reducers to put fetch request in log in!
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
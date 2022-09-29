import * as types from '../constants/actionTypes';

const actions = {};

actions.logIn = (username, medList) => ({
  type: types.LOG_IN,
  payload: {username, medList}
});

actions.logOut = () => ({
  type: types.LOG_OUT
});

actions.signUp = (username) => ({
  type: types.SIGN_UP,
  payload: {username}
});

const createMed = (
  title,
  medName,
  medDesc,
  start,
  frequency,
  administrationTime,
  doses,
  updateCalendar
) => ({
  type: types.CREATE_MED,
  payload: {
    title,
    medName,
    medDesc,
    start,
    frequency,
    administrationTime,
    doses,
    updateCalendar
  }
});

const updateMed = (
  title,
  medName,
  medDesc,
  start,
  frequency,
  administrationTime,
  doses,
  updateCalendar
) => ({
  type: types.UPDATE_MED,
  payload: {
    title,
    medName,
    medDesc,
    start,
    frequency,
    administrationTime,
    doses,
    updateCalendar
  }
});

const deleteMed = (medName) => ({
  type: types.DELETE_MED,
  payload: medName
});

// description, frequency, taketime, startdate, quantity, title
actions.createMedThunk = (
  title,
  medName,
  medDesc,
  start,
  frequency,
  administrationTime,
  doses,
  updateCalendar,
  username
) => dispatch => {
  fetch('/api/homepage', {
    method: 'POST',
    body: JSON.stringify({
      // username: username,
      description: medDesc,
      frequency: frequency,
      taketime: administrationTime,
      startdate: start,
      quantity: doses,
      title: title, 
      prescription: medName
      // add: updateCalendar
    }),
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => {
    if(res.status === 200) {
      dispatch(createMed(title, medName, medDesc, start, frequency, administrationTime, doses, updateCalendar))
    } else {
      console.log('inside of createMedThunk - Server returned status of', res.status)
    }
  })
  .catch(err => console.log('Error in createMedThunk fetch:', err));
};

actions.updateMedThunk = (
  title,
  medName,
  medDesc,
  start,
  frequency,
  administrationTime,
  doses,
  updateCalendar,
  username
) => dispatch => {
  fetch('/api/homepage', {
    method: 'PATCH',
    body: JSON.stringify({
      // username: username,
      description: medDesc,
      frequency: frequency,
      taketime: administrationTime,
      startdate: start,
      quantity: doses,
      title: title,
      prescription: medName 
      // add: updateCalendar
    }),
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => {
    if(res.status === 200) {
      dispatch(updateMed(title, medName, medDesc, start, frequency, administrationTime, doses, updateCalendar))
    } else {
      console.log('inside of updateMedThunk - Server returned status of', res.status)
    }
  })
  .catch(err => console.log('Error in updateMedThunk fetch:', err));
};

actions.deleteMedThunk = (
  title
) => dispatch => {
  fetch('/api/homepage', {
    method: 'DELETE',
    body: JSON.stringify({
      // username: username,
      title: title,
    }),
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => {
    if(res.status === 200) {
      dispatch(deleteMed(title));
    } else {
      console.log('inside of deleteMedThunk - Server returned status of', res.status)
    }
  })
  .catch(err => console.log('Error in deleteMedThunk fetch:', err));
};

export default actions;
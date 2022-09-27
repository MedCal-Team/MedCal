import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
  userName: '',
  calendarEmbedSrc: '',
  medList: []
};

const medReducer = (state = initialState, action) => {
  let loggedIn;
  let userName;
  let calendarEmbedSrc;
  let medList;
  let prescription;

  switch(action.type) {
    case types.LOG_IN:
      userName = action.payload.userName;
      calendarEmbedSrc = action.payload.calendarEmbedSrc;
      medList = action.payload.medList;
      loggedIn = true;

      return {
        loggedIn,
        userName,
        calendarEmbedSrc,
        medList
      };
    
    case types.SIGN_UP:
      userName = action.payload.userName;
      calendarEmbedSrc = action.payload.calendarEmbedSrc;
      loggedIn = true;

      return {
        ...state,
        loggedIn,
        userName,
        calendarEmbedSrc
      };
    
    case types.LOG_OUT:
      return {
        loggedIn: false,
        userName: '',
        calendarEmbedSrc: '',
        medList: [],
      };
    
    case types.CREATE_MED: 
      medList = state.medList.slice();
      prescription = {
        title: action.payload.title,
        medName: action.payload.medName,
        medDesc: action.payload.medDesc,
        start: action.payload.start,
        frequency: action.payload.frequency,
        administrationTime: action.payload.administrationTime,
        doses: action.payload.doses,
        updateCalendar: action.payload.updateCalendar
      }
      medList.push(prescription);
      
      return {
        ...state,
        medList
      };

    case types.UPDATE_MED:
      medList = state.medList.slice();
      prescription = {
        title: action.payload.title,
        medName: action.payload.medName,
        medDesc: action.payload.medDesc,
        start: action.payload.start,
        frequency: action.payload.frequency,
        administrationTime: action.payload.administrationTime,
        doses: action.payload.doses,
        updateCalendar: action.payload.updateCalendar
      }

      for (let i = 0; i < medList.length; i++) {
        if (medList[i].medName === prescription.medName) {
          medList[i] = prescription;
          break;
        }
      }

      return {
        ...state,
        medList
      };

    case types.DELETE_MED:
      medList = state.medList.slice();
      medName = action.payload;

      for (let i = 0; i < medList.length; i++) {
        if (medList[i].medName === prescription.medName) {
          medList.splice(i, 1);
          break;
        }
      }

      return {
        ...state,
        medList
      };
    
    default:
      return state;
  }
};

export default medReducer;
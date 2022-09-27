import { combineReducers } from 'redux';

import medReducer from './medReducer';

const reducers = combineReducers({
  meds: medReducer,
});

export default reducers;
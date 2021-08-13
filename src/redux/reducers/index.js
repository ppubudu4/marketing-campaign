import { combineReducers } from 'redux';
import taskReducer from './tackReducers';
import authReducer from './authReducers';

export default combineReducers({
  task: taskReducer,
  auth: authReducer,
});

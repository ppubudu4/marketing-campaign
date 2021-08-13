import { combineReducers } from 'redux';
import taskReducer from './tackReducers';

export default combineReducers({
  task: taskReducer,
});

import { combineReducers } from 'redux';
import addFormReducers from './addFormReducers';
import listReducers from './listReducers';

export default combineReducers({
  addForm: addFormReducers,
  admin: listReducers, 
})
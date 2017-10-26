import firebase from 'firebase';
import { LIST_ADD, LIST_CREATE, LIST_FETCH_SUCCESS } from './types';

export const listAdd = ({ prop, value }) => {
  return {
    type: LIST_ADD,
    payload: { prop, value }
  };
};

export const listCreate = ({ label, hours, minute }) => {

  return (dispatch) => {
    firebase.database().ref(`/users/admin`)
    .push({ label, hours, minute })
    .then(() => {
      dispatch({ type: LIST_CREATE });
    })
  }
}

export const listFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/users/admin`)
    .on('value', snapshot => {
      dispatch({ type: LIST_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
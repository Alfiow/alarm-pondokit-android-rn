import { LIST_ADD, LIST_CREATE } from '../actions/types';

const INITIAL_STATE = {
  label: '',
  hours: '',
  minute: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case LIST_ADD:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LIST_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
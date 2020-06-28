import { MODAL_OPEN, MODAL_CLOSE } from '../actions/types';

const INITIAL_STATE = {
  isOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, isOpen: true, modalType: action.payload };
    case MODAL_CLOSE:
      return { ...state, isOpen: false, modalType: null };
    default:
      return state;
  }
};

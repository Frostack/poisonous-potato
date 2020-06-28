import { USER_SIGN_UP, USER_LOGIN, USER_VERIFY, USER_LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  data: null,
  isVerified: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return { ...state, data: action.payload, isVerified: true };
    case USER_LOGIN:
      return { ...state, data: action.payload, isVerified: true };
    case USER_VERIFY:
      return { ...state, data: action.payload, isVerified: true };
    case USER_LOGOUT:
      return { ...state, data: null, isVerified: false };
    default:
      return state;
  }
};

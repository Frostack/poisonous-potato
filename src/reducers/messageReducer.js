import { SOCKET_CONNECT, FETCH_MESSAGE, FETCH_ALL_MESSAGES } from '../actions/types';

const INITIAL_STATE = {
  socket: null,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCKET_CONNECT:
      return { ...state, socket: action.payload };
    case FETCH_MESSAGE:
      return { ...state, data: [...state.data, action.payload] };
    case FETCH_ALL_MESSAGES:
      return { ...state, data: action.payload.messages };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';

import userReducer from './userReducer';
import messageReducer from './messageReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  user: userReducer,
  messages: messageReducer,
  modal: modalReducer,
});

import api from '../apis/api';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

import {
  USER_SIGN_UP,
  USER_LOGIN,
  USER_VERIFY,
  USER_LOGOUT,
  MODAL_OPEN,
  MODAL_CLOSE,
  SOCKET_CONNECT,
  MESSAGE_SEND,
  FETCH_MESSAGE,
  FETCH_ALL_MESSAGES,
} from './types';

export const signUpUser = values => async dispatch => {
  const response = await api.post('/user/create', values);
  Cookies.set('token', response.data.token);
  dispatch({ type: USER_SIGN_UP, payload: response.data.user });
};

export const loginUser = values => async dispatch => {
  const response = await api.post('/user/login', values);
  Cookies.set('token', response.data.token);
  dispatch({ type: USER_LOGIN, payload: response.data.user });
};

export const verifyUser = () => async dispatch => {
  const response = await api.get('/user/verify');
  dispatch({ type: USER_VERIFY, payload: response.data.user });
};

export const logoutUser = () => async dispatch => {
  await api.post('/user/logout');
  Cookies.remove('token');
  dispatch({ type: USER_LOGOUT });
};

export const openModal = modalType => {
  return { type: MODAL_OPEN, payload: modalType };
};

export const closeModal = () => {
  return { type: MODAL_CLOSE };
};

export const connectSocket = () => dispatch => {
  const socket = io('http://localhost:4000');
  socket.on('message', msg => {
    dispatch({ type: FETCH_MESSAGE, payload: msg });
  });
  dispatch({ type: SOCKET_CONNECT, payload: socket });
};

export const sendMessage = text => (dispatch, getState) => {
  const { socket } = getState().messages;
  const owner = getState().user.data.username;
  socket.emit('message', text, owner);
  dispatch({ type: MESSAGE_SEND });
};

export const fetchAllMessages = () => async dispatch => {
  const response = await api.get('/messages/all');
  dispatch({ type: FETCH_ALL_MESSAGES, payload: response.data });
};

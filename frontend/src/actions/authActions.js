import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_ERROR } from './types';

export const registerUser = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const loginUser = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

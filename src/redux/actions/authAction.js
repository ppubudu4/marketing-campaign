import axios from 'axios';
import { AuthTypes } from '../types/types';

const baseUrl = `http://localhost:5000`;

export const login = (data, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/login`, config);

    if (
      res?.data?.username === data.username &&
      res?.data?.password === data.password
    ) {
      dispatch({ type: AuthTypes.LOGIN_USER });
      history.push('/');
    } else {
      dispatch({
        type: AuthTypes.LOGIN_ERROR,
        payload: 'Please Enter Correct Username or Password',
      });
    }
  } catch (error) {
    dispatch({
      type: AuthTypes.LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: AuthTypes.CLEAR_ERROR });
};

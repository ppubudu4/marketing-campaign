import { AuthTypes } from '../types/types';

const initialState = {
  authenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_USER:
      return {
        ...state,
        authenticated: true,
      };
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
      };
    case AuthTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

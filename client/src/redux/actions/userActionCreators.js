import ACTION_TYPES from './actionTypes';

export const userRequest = () => ({
  type: ACTION_TYPES.USER_AUTH_REQUEST,
});

export const userSuccess = (user) => ({
  type: ACTION_TYPES.USER_AUTH_SUCCESS,
  payload: user,
});

export const userError = (error) => ({
  type: ACTION_TYPES.USER_AUTH_ERROR,
  payload: error,
});

export const logout = () => ({
  type: ACTION_TYPES.LOGOUT,
});

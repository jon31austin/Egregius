import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user)
    .then( user2 => dispatch(receiveCurrentUser(user2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
         )
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then( () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON))
         )
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user)
    .then( user2 => dispatch(receiveCurrentUser(user2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
         )
};
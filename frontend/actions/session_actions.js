import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_action';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});



export const signup = user => dispatch => {
  return(
  SessionApiUtil.signup(user)
  .then(
          user => {dispatch(receiveCurrentUser(user)); dispatch(clearErrors())},
          errors => (dispatch(receiveErrors(errors)))
      )
  )
  };

export const login = user => dispatch => (
    SessionApiUtil.login(user)
      .then(
        user => { dispatch(receiveCurrentUser(user)); dispatch(clearErrors()) },
        errors => (dispatch(receiveErrors(errors)))
      )
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
      .then(
        () => (dispatch(logoutCurrentUser()))
      )
);

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";

//DELETE TEST MATERIAL STARTING
import { signup, login, logout } from "./util/session_api_util";
//ENDING HERE

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // DELETE TEST MATERIAL STARTING 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ENDING HERE

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Genius</h1>, root);
});
import React from 'react';
import ReactDOM from 'react-dom';

//DELETE TEST MATERIAL STARTING
import { signup, login, logout } from "./util/session_api_util";
//ENDING HERE

document.addEventListener('DOMContentLoaded', () => {

  // DELETE TEST MATERIAL STARTING 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // ENDING HERE

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Genius</h1>, root);
});
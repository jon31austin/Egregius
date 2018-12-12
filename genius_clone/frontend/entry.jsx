import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

//DELETE TEST MATERIAL STARTING
import { signup, login, logout } from "./actions/session_actions";
import rootReducer from "./reducers/root_reducer";
//ENDING HERE

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // DELETE TEST MATERIAL STARTING 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.rootReducer = rootReducer;
  // ENDING HERE

  ReactDOM.render(< Root store={store} />, root);
});
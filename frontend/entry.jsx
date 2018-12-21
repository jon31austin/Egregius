import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

//DELETE TEST MATERIAL STARTING
import { signup, login, logout } from "./actions/session_actions";
import { getTracks } from "./actions/track_actions";
import { createAnnotation } from "./actions/annotation_actions";
import { getSearchResults } from "./actions/search_actions";
//ENDING HERE

document.addEventListener('DOMContentLoaded', () => {
  //START BOOTSTRAPPING CURRENT USER
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //FINISH BOOTSTRAPPING 

  const root = document.getElementById('root');

  // DELETE TEST MATERIAL STARTING 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getTracks = getTracks;
  window.createAnnotation = createAnnotation;
  window.getSearchResults = getSearchResults;
  // ENDING HERE

  ReactDOM.render(< Root store={store} />, root);
});

// body: "window test", start_index: 0, end_index: 10, user_id: 1, track_id: 1
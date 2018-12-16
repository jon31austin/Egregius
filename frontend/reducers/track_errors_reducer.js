import { RECEIVE_TRACKS_ERRORS, RECEIVE_CURRENT_USER } from "../actions/track_actions";
// import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const tracksErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default tracksErrorsReducer;
import { RECEIVE_SELECTION, 
        RECEIVE_SINGLE_ANNOTATION,
        CLEAR_SELECTION,
        RECEIVE_ANNOTATIONS,
        RECEIVE_DELETION } from "../actions/annotation_actions";

const defaultState = {
  startIndex: null,
  endIndex: null,
  open: false,
  selection: "",
  selected: false,
  id: null,
  editing: false
};

const lyricsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ANNOTATIONS:
      const newState = Object.assign({}, defaultState)
      delete newState.id 
      return Object.assign({}, state, newState);
    case RECEIVE_SINGLE_ANNOTATION:
      const newState1 = Object.assign({}, defaultState);
      //now it'll stay open after submission, edit forms are closed
      newState1.selected = true;
      newState1.id = Object.keys(action.annotation)[0]
      return newState1;
    case RECEIVE_SELECTION:
      return Object.assign({}, state, action.selection);
    case RECEIVE_DELETION:
    case CLEAR_SELECTION:
      return defaultState;
    default:
      return state;
  }
};

export default lyricsReducer;
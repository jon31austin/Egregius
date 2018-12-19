import { RECEIVE_SELECTION, 
        CLEAR_SELECTION,
        RECEIVE_ANNOTATIONS } from "../actions/annotation_actions";

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
      return Object.assign({}, state, newState)
    case CLEAR_SELECTION:
      return defaultState;
    case RECEIVE_SELECTION:
      return Object.assign({}, state, action.selection);
    default:
      return state;
  }
};

export default lyricsReducer;
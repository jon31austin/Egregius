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
      //FIX THIS
      return null
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
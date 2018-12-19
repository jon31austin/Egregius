import { RECEIVE_ANNOTATIONS_ERRORS, 
  RECEIVE_ANNOTATIONS,
  CLEAR_SELECTION,
  RECEIVE_SELECTION
} from "../actions/annotation_actions";


const annotationsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANNOTATIONS_ERRORS:
      return action.errors;
    case CLEAR_SELECTION:
    case RECEIVE_SELECTION:
    case RECEIVE_ANNOTATIONS:
      return [];
    default:
      return state;
  }
}

export default annotationsErrorsReducer;
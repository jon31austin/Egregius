import { RECEIVE_ANNOTATIONS_ERRORS, RECEIVE_ANNOTATIONS } from "../actions/annotation_actions";

const annotationsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANNOTATIONS_ERRORS:
      return action.errors;
    case RECEIVE_ANNOTATIONS:
      return [];
    default:
      return state;
  }
}

export default annotationsErrorsReducer;
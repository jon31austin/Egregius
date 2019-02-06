import { RECEIVE_ANNOTATIONS, RECEIVE_DELETION, RECEIVE_SINGLE_ANNOTATION } from "../../actions/annotation_actions";

const annotationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_ANNOTATION:
      return Object.assign({}, state, action.annotation);
    case RECEIVE_ANNOTATIONS:
      return Object.assign({}, state, action.annotations);
    case RECEIVE_DELETION:
      const newState2 = Object.assign({}, state);
      delete newState2[action.annotationId]
      return newState2;
    default:
      return state;
  }
};

export default annotationsReducer;
import merge from "lodash/merge";
import { RECEIVE_ANNOTATIONS, RECEIVE_DELETION } from "../actions/annotation_actions";

const annotationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANNOTATIONS:
      const newState = merge({}, state, action.annotations);
      return newState;
    case RECEIVE_DELETION:
      const newState2 = merge({}, state);
      delete newState2[action.annotationId]
      return newState2;
    default:
      return state;
  }
};

export default annotationsReducer;
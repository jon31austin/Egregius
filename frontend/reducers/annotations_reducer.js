import merge from "lodash/merge";
import { RECEIVE_ANNOTATIONS } from "../actions/annotation_actions";

const annotationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANNOTATIONS:
      const newState = merge({}, state, action.annotations);
      return newState;
    default:
      return state;
  }
};

export default annotationsReducer;
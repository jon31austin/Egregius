import merge from "lodash/merge";
import { RECEIVE_ANNOTATION } from "../actions/annotation_actions";

const annotationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      const newState = merge({}, state, action.annotation);
      return newState;
    default:
      return state;
  }
};

export default annotationsReducer;
import merge from "lodash/merge";
import { RECEIVE_NEXT_TRACKS } from "../../actions/track_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEXT_TRACKS:
      const newState = merge({}, state, action.tracks);
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
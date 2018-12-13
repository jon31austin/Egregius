import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = { [action.user.id]: action.user }
      const newState = merge( {}, state, newUser );
      return newState;
    default:
      return state
  }
};

export default usersReducer;
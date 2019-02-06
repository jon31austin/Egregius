import { RECEIVE_TRACK_COMMENT, 
  RECEIVE_ALL_TRACK_COMMENTS } from "../../actions/track_comment_actions";

  const trackCommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_TRACK_COMMENT:
        return Object.assign({}, state, action.comment);
      case RECEIVE_ALL_TRACK_COMMENTS:
        return Object.assign({}, state, action.comments)
      default:
        return state;
    }
  };

  export default trackCommentsReducer;
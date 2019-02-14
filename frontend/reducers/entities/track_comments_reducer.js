import { RECEIVE_TRACK_COMMENT, 
  RECEIVE_ALL_TRACK_COMMENTS,
  RECEIVE_DELETION } from "../../actions/track_comment_actions";

  const trackCommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_TRACK_COMMENT:
        return Object.assign({}, state, action.comment);
      case RECEIVE_ALL_TRACK_COMMENTS:
        return Object.assign({}, state, action.comments);
      case RECEIVE_DELETION:
        const newState = Object.assign({}, state);
        delete newState[action.commentId]
        return newState;
      default:
        return state;
    }
  };

  export default trackCommentsReducer;
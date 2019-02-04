import * as CommentsApiUtil from "../util/comments_api_util";

export const RECEIVE_TRACK_COMMENT = "RECEIVE_TRACK_COMMENT";
export const RECEIVE_ALL_TRACK_COMMENTS = "RECEIVE_ALL_TRACK_COMMENTS";

const receiveTrackComment = (comment) => {
  return {
    type: RECEIVE_TRACK_COMMENT,
    comment
  }
};

const receiveAllTrackComments = (comments) => {
  return {
    type: RECEIVE_ALL_TRACK_COMMENTS,
    comments
  }
};

// const receiveErrors = (errors) => {
//   return {
//     type: RECEIVE_TRACKS_ERRORS,
//     errors
//   }
// };

export const createTrackComment = (comment) => dispatch => {
  return CommentsApiUtil.createTrackComment(comment)
            .then(comment => dispatch(receiveTrackComment(comment)))
};
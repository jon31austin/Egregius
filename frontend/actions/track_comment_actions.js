import * as CommentsApiUtil from "../util/comments_api_util";

export const RECEIVE_TRACK_COMMENT = "RECEIVE_TRACK_COMMENT";
export const RECEIVE_ALL_TRACK_COMMENTS = "RECEIVE_ALL_TRACK_COMMENTS";
export const RECEIVE_DELETION = "RECEIVE_DELETION";

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

const receiveDeletion = (comment) => {
  return {
    type: RECEIVE_DELETION,
    commentId: Object.keys(comment)[0]
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

export const fetchTrackComments = (track_id) => dispatch => {
  return CommentsApiUtil.fetchTrackComments(track_id)
            .then(comments => dispatch(receiveAllTrackComments(comments)))
};

export const deleteTrackComment = (trackId, commentId) => dispatch => {
  return CommentsApiUtil.deleteTrackComment(trackId, commentId)
            .then(comment => dispatch(receiveDeletion(comment)))
};
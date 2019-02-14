import React from 'react';
import { connect } from "react-redux";

import TrackComments from "./track_comments";

import { 
  fetchTrackComments,
  createTrackComment,
  deleteTrackComment
 } from "../../../actions/track_comment_actions";


const msp = (state, ownProps) => {
  let comments = Object.values(state.entities.trackComments)
  return {
    comments,
    currentUser: state.session.id,
    loggedIn: !!(state.session.id)
  }
}

const mdp = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(fetchTrackComments(id)),
    submitComment: (comment) => dispatch(createTrackComment(comment)),
    deleteTrackComment: (trackId, commentId) => dispatch(deleteTrackComment(trackId, commentId))
  }
}

export default connect(msp, mdp)(TrackComments);
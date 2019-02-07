import React from 'react';
import { connect } from "react-redux";

import TrackComments from "./track_comments";

import { fetchTrackComments } from "../../../actions/track_comment_actions";


const msp = (state, ownProps) => {
  let comments = Object.values(state.entities.trackComments)
  return {
    comments
  }
}

const mdp = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(fetchTrackComments(id))
  }
}

export default connect(msp, mdp)(TrackComments);
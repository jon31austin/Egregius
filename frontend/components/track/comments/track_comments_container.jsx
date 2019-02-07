import React from 'react';
import { connect } from "react-redux";

import TrackComments from "./track_comments";

import { fetchTrackComments } from "../../../actions/track_comment_actions";


const msp = (state, ownProps) => {
  debugger;
  return {
  }
}

const mdp = (dispatch) => {
  debugger;
  return {
    fetchComments: (id) => dispatch(fetchTrackComments(id))
  }
}

export default connect(msp, mdp)(TrackComments);
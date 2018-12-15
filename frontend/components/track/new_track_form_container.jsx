import React from 'react';
import { connect } from "react-redux";

import NewTrackForm from "./new_track_form";
import createTrack from "../../actions/track_actions";

const msp = (state) => {
  return {
  }
}

const mdp = (dispatch) => {
  return {
    createTrack: (track) => dispatch(createTrack(track))
  }
}

export default connect(msp, mdp)(NewTrackForm);
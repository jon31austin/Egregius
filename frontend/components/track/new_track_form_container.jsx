import React from 'react';
import { connect } from "react-redux";

import NewTrackForm from "./new_track_form";
import { createTrack } from "../../actions/track_actions";
import { closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    errors: state.errors.tracks
  }
}

const mdp = (dispatch) => {
  return {
    createTrack: (track) => dispatch(createTrack(track)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(NewTrackForm);
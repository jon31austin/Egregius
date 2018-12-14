import React from 'react';
import { connect } from "react-redux";

import TrackShow from "./track_show";
import { getSingleTrack } from "../../actions/track_actions";

const msp = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId]
  };
};

const mdp = (dispatch) => {
  return {
    getSingleTrack: (id) => dispatch(getSingleTrack(id))
  };
};

export default connect(msp, mdp)(TrackShow);
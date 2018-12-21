import React from 'react';
import { connect } from "react-redux";

import TrackShow from "./track_show";
import { getSingleTrack } from "../../actions/track_actions";
import { clearSelection } from "../../actions/annotation_actions";

const msp = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId]
  };
};

const mdp = (dispatch) => {
  return {
    getSingleTrack: (id) => dispatch(getSingleTrack(id)),
    clearSelection: () => dispatch(clearSelection())
  };
};

export default connect(msp, mdp)(TrackShow);
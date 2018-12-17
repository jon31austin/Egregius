import React from 'react';
import { connect } from "react-redux";

import TrackShowMain from "./track_show_main";
import { fetchAnnotations } from "../../actions/annotation_actions";

const msp = (state, ownProps) => {
  const trackAnnos = Object.values(state.entities.annotations);
  return {
    annotations: trackAnnos
  };
};

const mdp = (dispatch) => {
  return {
    fetchAnnotations: (trackId) => dispatch(fetchAnnotations(trackId))
  };
};

export default connect(msp, mdp)(TrackShowMain);
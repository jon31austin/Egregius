import React from 'react';
import { connect } from "react-redux";

import { getTracks } from "../../actions/track_actions";
import TrackIndex from "./track_index";


// RANKING IS NOT YET WELL DEFINED.
// TODO: MUST FIGURE OUT
// ranking: state.entities.ranking
const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks)
  }
};

const mdp = (dispatch) => {
  return {
    getTracks: (offset) => dispatch(getTracks(offset))
  }
};

export default connect(msp, mdp)(TrackIndex);
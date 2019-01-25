import React from 'react';
import { connect } from "react-redux";
import { fetchLetterTracks } from "../../actions/track_actions";

import Browse from "./browse";

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks)
  }
};

const mdp = (dispatch) => {
  return {
    fetchLetterTracks: (letter) => dispatch(fetchLetterTracks(letter))
  }
};

export default connect(msp, mdp)(Browse);
import React from 'react';
import { connect } from "react-redux";

import TrackShowMain from "./track_show_main";
import { fetchAnnotations } from "../../actions/annotation_actions";


//Gets all the annotations from the Redux State that are specific to the specific track.
const msp = (state, ownProps) => {
  const trackAnnos = Object.values(state.entities.annotations)
    .filter(ann => ann.track_id === ownProps.track.id)
    .sort((a, b) => {
      a.start_index - b.start_index
    }).reverse();
    
  return {
    annotations: trackAnnos
  };
};

//Fetches all track-specific annotations from database.
const mdp = (dispatch) => {
  return {
    fetchAnnotations: (trackId) => dispatch(fetchAnnotations(trackId))
  };
};

export default connect(msp, mdp)(TrackShowMain);
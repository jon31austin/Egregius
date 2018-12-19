import React from 'react';
import { connect } from "react-redux";

import TrackShowMain from "./track_show_main";
import { fetchAnnotations, clearSelection, setSelection } from "../../actions/annotation_actions";


//Gets all the annotations from the Redux State that are specific to the specific track.
const msp = (state, ownProps) => {

  const compare = (a, b) => {
    if (a.start_index < b.start_index)
      return 1;
    if (a.start_index > b.start_index)
      return -1;
    return 0;
  };

  const trackAnnos = Object.values(state.entities.annotations)
    .filter(ann => ann.track_id === ownProps.track.id)
    .sort(compare);
    
  return {
    annotations: trackAnnos,
    trackId: ownProps.track.id
  };
};

//Fetches all track-specific annotations from database.
const mdp = (dispatch) => {
  return {
    fetchAnnotations: (trackId) => dispatch(fetchAnnotations(trackId)),
    clearSelection: () => dispatch(clearSelection()),
    setSelection: (sel) => dispatch(setSelection(sel))
  };
};

export default connect(msp, mdp)(TrackShowMain);
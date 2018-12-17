import React from 'react';
import { connect } from "react-redux";

import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";
import { createAnnotation } from "../../actions/annotation_actions";

const msp = (state, ownProps) => {
  const openAnno = ownProps.lyrics.openAnno;
  const annoSelection = ownProps.lyrics.selection;
  const start_index = ownProps.lyrics.startIndex;
  const end_index = ownProps.lyrics.endIndex;
  const loggedIn = !!(state.session.id);
  
  return {
    open: openAnno,
    selection: annoSelection,
    startIndex: start_index,
    endIndex: end_index,
    loggedIn: loggedIn,
    currentUser: state.session.id
  }
};

const mdp = (dispatch) => {

  return {
    openModal: (field) => dispatch(openModal(field)),
    submitAnnotation: (anno) => dispatch(createAnnotation(anno))
  }
};

export default connect(msp, mdp)(Annotation);
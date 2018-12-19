import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router"

import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";
import { createAnnotation, 
  deleteAnnotation,  
  updateAnnotation,
  clearSelection,
  setSelection } from "../../actions/annotation_actions";

const msp = (state, ownProps) => {

  const lyricSelection = state.ui.lyrics;
  const loggedIn = !!(state.session.id);
  const singleAnnotation = ownProps.annotations.filter(ann => ann.id == lyricSelection.id)[0];
  const errors = state.errors.annotations;
  
  return {
    lyricSelection,
    loggedIn, 
    singleAnnotation,
    currentUser: state.session.id,
    errors
  }
};

const mdp = (dispatch) => {

  return {
    openModal: (field) => dispatch(openModal(field)),
    submitAnnotation: (anno) => dispatch(createAnnotation(anno)),
    deleteAnnotation: (annoId) => dispatch(deleteAnnotation(annoId)),
    updateAnnotation: (ann) => dispatch(updateAnnotation(ann)),
    setSelection: (sel) => dispatch(setSelection(sel)),
    clearSelection: () => dispatch(clearSelection())
  }
};

export default withRouter(connect(msp, mdp)(Annotation));
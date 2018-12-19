import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router"

import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";
import { createAnnotation, 
  deleteAnnotation,  
  updateAnnotation } from "../../actions/annotation_actions";

const msp = (state, ownProps) => {

  const openAnno = ownProps.lyrics.openAnno;
  const annoSelection = ownProps.lyrics.selection;
  const start_index = ownProps.lyrics.startIndex;
  const end_index = ownProps.lyrics.endIndex;
  const loggedIn = !!(state.session.id);
  const annoSelected = ownProps.lyrics.annoSelected;
  const annoId = ownProps.lyrics.annoId;
  const singleAnnotation = ownProps.annotations.filter(ann => ann.id == annoId)[0];
  const editing = ownProps.lyrics.editing;
  
  return {
    open: openAnno,
    selection: annoSelection,
    startIndex: start_index,
    endIndex: end_index,
    loggedIn: loggedIn,
    currentUser: state.session.id,
    track_id: ownProps.lyrics.track_id,
    annoSelected,
    annoId,
    singleAnnotation,
    editing
  }
};

const mdp = (dispatch) => {

  return {
    openModal: (field) => dispatch(openModal(field)),
    submitAnnotation: (anno) => dispatch(createAnnotation(anno)),
    deleteAnnotation: (annoId) => dispatch(deleteAnnotation(annoId)),
    updateAnnotation: (ann) => dispatch(updateAnnotation(ann))
  }
};

export default withRouter(connect(msp, mdp)(Annotation));
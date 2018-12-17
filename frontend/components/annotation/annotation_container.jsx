import React from 'react';
import { connect } from "react-redux";

import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  const openAnno = ownProps.lyrics.openAnno;
  const annoSelection = ownProps.lyrics.selection;
  const loggedIn = !!(state.session.id)
  return {
    open: openAnno,
    selection: annoSelection,
    startIndex: ownProps.lyrics.startIndex,
    endIndex: ownProps.lyrics.endIndex,
    loggedIn: loggedIn
  }
};

const mdp = (dispatch) => {

  return {
    openModal: (field) => dispatch(openModal(field))
  }
};

export default connect(msp, mdp)(Annotation);
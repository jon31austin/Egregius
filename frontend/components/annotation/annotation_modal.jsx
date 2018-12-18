import React from "react";
import { connect } from "react-redux";

import { closeModal, openModal } from '../../actions/modal_actions';

const TrackFormErrorModal = (props) => {




  if (modal === "specific_annotation") {
    return <AnnotationIndexItem ann={ann} />
  } else {
    return <AnnotationIndex anns={this.props.annotations} />
  }
};

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(AnnotationModal);
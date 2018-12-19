import React from "react";
import { connect } from "react-redux";

import { closeModal } from '../../actions/modal_actions';

const AnnotationFormErrorModal = ({ modal, closeModal, errors }) => {

  if (!modal) {
    return null
  } else if (modal === "annotation_form_error") {

    debugger

    const listedErrors = errors.map((error, i) => (
      <li key={`error-${i}`}>{error}</li>
    ));

    return (
      <div className="track-error-popup" onClick={closeModal}>
        <span className="track-error-close">&times;</span>
        <ul>
          {listedErrors}
        </ul>
      </div>
    );
  } else {
    return null
  }
};

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(AnnotationFormErrorModal)
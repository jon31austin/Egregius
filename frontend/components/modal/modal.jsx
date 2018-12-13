import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../session_forms/login_form_container";
import SignupFormContainer from "../session_forms/signup_form_container";

import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null
  }

  let component;
  switch(modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal} >
      <span className="modal-close">&times;</span>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
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

export default connect(msp, mdp)(Modal)

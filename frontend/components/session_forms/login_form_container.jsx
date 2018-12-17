import React from 'react';

import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "Sign In",
    formPrompt: "Sign in to Egregius"
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className="switch-session-form" onClick={() => dispatch(openModal("signup"))}>
        Create an account
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(SessionForm);
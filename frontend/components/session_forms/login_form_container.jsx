import React from 'react';

import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "Log In",
    formPrompt: "Sign in to Genius"
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className="switch-session-form" onClick={() => dispatch(openModal("signup"))}>
        Don't yet have an account? Sign up!
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(SessionForm);
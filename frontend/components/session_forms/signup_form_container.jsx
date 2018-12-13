import React from 'react';

import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "Sign Up",
    formPrompt: "Sign up for Genius"
  }
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="switch-session-form" onClick={() => dispatch(openModal("login"))}>
        Already have an account? Log in here!
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(SessionForm);
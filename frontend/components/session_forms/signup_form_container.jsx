import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "signup",
    navLink: <Link to="/login">Already a member? Log in!</Link>
  }
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
};

export default connect(msp, mdp)(SessionForm);
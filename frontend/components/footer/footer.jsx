import React from "react";
import { Link } from 'react-router-dom';

import { openModal } from "../../actions/modal_actions";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-container">
        <Link className="footer-link" to="/about">About Egregius</Link>
        <Link className="footer-link" to="/guidelines">Contributor Guidelines</Link>
        <Link className="footer-link" to="/contact">Contact Me</Link>
        <div className="footer-link" onClick={() => dispatch(openModal("login"))}>Sign In</div>
      </div>
    </div>
  )
}

export default Footer;
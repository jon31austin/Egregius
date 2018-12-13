import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-container">
        <Link className="footer-link" to="/about">About Egregius</Link>
        <Link className="footer-link" to="/guidelines">Contributor Guidelines</Link>
        <Link className="footer-link" to="/contact">Contact Me</Link>
        <Link className="footer-link" to="/about">Sign In</Link>
      </div>
    </div>
  )
}

export default Footer;
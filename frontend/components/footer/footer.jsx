import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/about">About Egregius</Link>
      </div>
    </div>
  )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; 2026 AICODIN. All rights reserved. | <Link to="/help">Help</Link> | <Link to="/contact">Contact</Link></p>
      </div>
    </footer>
  );
};

export default Footer;

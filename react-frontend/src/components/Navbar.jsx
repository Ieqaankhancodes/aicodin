import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={closeNav}>AICODIN</Link>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleNav}>
          {isOpen ? '\u2715' : '\u2630'}
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeNav} style={isActive('/') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav} style={isActive('/about') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeNav} style={isActive('/services') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav} style={isActive('/projects') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={closeNav} style={isActive('/team') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav} style={isActive('/contact') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={closeNav} style={isActive('/help') ? { color: '#58a6ff', background: 'rgba(88, 166, 255, 0.15)', fontWeight: 700 } : {}}>
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

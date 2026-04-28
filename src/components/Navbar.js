import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import logo from '../assets/logo.png'; /* ← put the uploaded image here */
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">

        {/* Logo — image replaces the old M mark */}
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img src={logo} alt="MedDocs Publishers" className="navbar-logo-img" />
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : '/' + link.href}
                className={`navbar-link ${active === link.href ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact info */}
        <div className="navbar-topbar">
          <a href="mailto:support@meddocsonline.org" className="topbar-item">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            support@meddocsonline.org
          </a>
          <a href="tel:+16087186264" className="topbar-item">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 (608) 718-6264
          </a>
        </div>

        {/* Submit CTA */}
        {/* <a
          href={isHome ? '#contact' : '/#contact'}
          className="btn btn-primary navbar-cta"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Submit Manuscript
        </a> */}

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : '/' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <a
          href={isHome ? '#contact' : '/#contact'}
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Submit Manuscript
        </a> */}
      </div>
    </nav>
  );
}
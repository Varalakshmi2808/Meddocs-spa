import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; /* ← put the uploaded image here */  
import { useNavigate } from 'react-router-dom';

const footerLinks = {
  'Quick Links': ['Home', 'About Us', 'Journals', 'eBooks', 'Conferences', "FAQ's", 'Membership', 'Contact Us'],
  'For Authors': ['Submit Manuscript', 'Author Guidelines', 'Join as Reviewer', 'Open Access', 'Peer Review', 'Plagiarism Policy', 'Publication Fee'],
  'Journals': ['Cardiology', 'Neurology', 'Gastroenterology', 'Nanomedicine', 'Biotechnology', 'Addiction & Recovery', 'Community Medicine'],
};

const socialIcons = [
  {
    label: 'Facebook',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    label: 'Twitter',
    icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="container footer-top-inner">

          {/* Brand column */}
          <div className="footer-brand">
            <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                      <img src={logo} alt="MedDocs Publishers" className="navbar-logo-img" />
                    </a>

            <p className="footer-tagline">
              Advancing medical science through open-access publishing, peer-reviewed research, and international scientific conferences.
            </p>

            <div className="footer-social">
              {socialIcons.map(({ label, icon }) => (
                <a key={label} href="#" aria-label={label} className="social-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="footer-col" key={section}>
              <h4>{section}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#contact">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2018–2025 MedDocs Publishers LLC. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Use</a>
            <a href="#contact">Cookie Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { journals } from '../data';
import './Journals.css';

const getIcon = (color) => (
  <svg className="jc-svg" viewBox="0 0 24 24">
    <path d="M4 19.5V4.5a2 2 0 012-2h8l6 6v11a2 2 0 01-2 2H6a2 2 0 01-2-2z"/>
    <path d="M14 2v6h6"/>
  </svg>
);

export default function Journals() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="journals-section" id="journals">
      <div className="journals-bg" />

      <div className="container">
        <div className="journals-header">
          <div>
            <div className="section-label">Peer Reviewed</div>
            <h2 className="section-heading">Open Access Journals</h2>
          </div>

          <p className="journals-desc">
            We publish informative journals covering various areas of science, medicine, and latest technology — fully open access for the global scientific community.
          </p>
        </div>

        <div className="journals-grid">
          {journals.map((j, i) => (
            <div
              key={j.id}
              className={`journal-card animate-fade-up delay-${i + 1}`}
              onMouseEnter={() => setHovered(j.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--accent': j.color, '--accent-bg': j.bg }}
            >
              <div className="jc-top">
                <div className="jc-icon">
                  {getIcon(j.color)}
                </div>
                <div className="jc-issn">{j.issn}</div>
              </div>

              <h3 className="jc-title">{j.title}</h3>
              <p className="jc-desc">{j.description}</p>

              <div className="jc-footer">
                <div className="jc-articles">
                  <span className="jc-articles-num">{j.articles}</span>
                  <span className="jc-articles-lbl">Articles</span>
                </div>

                <a href="#contact" className="jc-link">
                  Read More
                  <svg className="jc-arrow" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="jc-bar" />
            </div>
          ))}
        </div>

        <div className="journals-cta">
          <Link to="/all-journals" className="btn-outline">View All 45+ Journals</Link>
        </div>
      </div>
    </section>
  );
}
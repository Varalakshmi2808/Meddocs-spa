import React from 'react';
import { conferences } from '../data';
import './Conferences.css';

const IconPin = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function Conferences() {
  return (
    <section className="conferences-section" id="conferences">
      <div className="container">

        <div className="conf-header">
          <div>
            <div className="section-label">International Events</div>
            <h2 className="section-heading">Upcoming Conferences</h2>
          </div>
          <p className="conf-intro">
            Join face-to-face discussions on the latest advancements in medicine and life sciences at our internationally organized scientific conferences.
          </p>
        </div>

        <div className="conf-grid">
          {conferences.map((c, i) => (
            <div key={c.id} className={`conf-card animate-fade-up delay-${i + 1}`}>

              {/* Top accent bar */}
              <div className="conf-card-bar" />

              <div className="conf-card-inner">

                {/* Status badge */}
                <div className="conf-status">
                  <span className="status-dot" />
                  Upcoming
                </div>

                {/* Title */}
                <h3 className="conf-title">{c.title}</h3>

                {/* Location & date */}
                <div className="conf-details">
                  <div className="conf-detail">
                    <IconPin />
                    {c.location}
                  </div>
                  <div className="conf-detail">
                    <IconCalendar />
                    {c.date}
                  </div>
                </div>

                {/* Divider */}
                <div className="conf-divider" />

                {/* Stats */}
                <div className="conf-stats">
                  <div className="conf-stat">
                    <strong>{c.delegates}+</strong>
                    <span>Delegates</span>
                  </div>
                  <div className="conf-stat-divider" />
                  <div className="conf-stat">
                    <strong>{c.sessions}</strong>
                    <span>Sessions</span>
                  </div>
                </div>

                {/* CTA */}
                <a href="#contact" className="conf-btn">Register Now</a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="conf-cta-block">
          <div className="conf-cta-text">
            <h3>Want to organize a conference with us?</h3>
            <p>We work with learned societies, industry-leading companies, and scholarly associations worldwide.</p>
          </div>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>

      </div>
    </section>
  );
}
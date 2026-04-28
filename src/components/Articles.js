import React from 'react';
import { recentArticles } from '../data';
import './Articles.css';

export default function Articles() {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="articles-header">
          <div className="section-label">Latest Research</div>
          <h2 className="section-heading">Recent Articles</h2>
          <p>Discover the newest peer-reviewed research across all our journals.</p>
        </div>

        <div className="articles-list">
          {recentArticles.map((a, i) => (
            <article
              key={a.id}
              className={`article-card animate-fade-up delay-${i + 1}`}
              style={{ '--accent': a.color }}
            >
              <div className="ac-type" style={{ color: a.color, background: a.color + '18' }}>
                {a.type}
              </div>
              <h3 className="ac-title">{a.title}</h3>
              <div className="ac-meta">
                <div className="ac-authors">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  {a.authors}
                </div>
                <div className="ac-journal">{a.journal}</div>
                <div className="ac-date">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {a.date}
                </div>
              </div>
              <a href="#contact" className="ac-read">
                Read Full Article
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <div className="ac-accent-bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

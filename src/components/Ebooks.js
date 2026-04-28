import React from 'react';
import { ebooks } from '../data';
import './Ebooks.css';

const BookIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 19.5V4.5a2 2 0 012-2h8l6 6v11a2 2 0 01-2 2H6a2 2 0 01-2-2z"/>
    <path d="M14 2v6h6"/>
    <path d="M9 13h6M9 17h4"/>
  </svg>
);

export default function Ebooks() {
  return (
    <section className="ebooks-section" id="ebooks">
      <div className="ebooks-bg" />

      <div className="container">
        <div className="ebooks-header">
          <div>
            <div className="section-label">Free to Download</div>
            <h2 className="section-heading" style={{ color: '#0688de' }}>Medical eBooks</h2>
          </div>
          <a href="#contact" className="btn btn-gold">View All eBooks</a>
        </div>

        <div className="ebooks-grid">
          {ebooks.map((book, i) => (
            <div
              key={book.id}
              className={`ebook-card animate-fade-up delay-${(i % 4) + 1}`}
              style={{ '--color': book.color }}
            >
              {/* Colored top spine */}
              <div className="book-spine" style={{ background: book.color }} />

              {/* Book cover content */}
              <div className="book-cover">

                {/* Icon box — tinted to match book color */}
                <div
                  className="book-icon-box"
                  style={{ background: `${book.color}28` }}
                >
                  <BookIcon />
                </div>

                {/* Category pill — tinted background + lightened text */}
                <div
                  className="book-category"
                  style={{
                    background: `${book.color}28`,
                    color: book.lightColor ?? book.color,
                  }}
                >
                  {book.category}
                </div>

                <h3 className="book-title">{book.title}</h3>
                <div className="book-year">{book.year} Edition</div>
              </div>

              {/* Divider between content and action */}
              <div className="book-divider" />

              <div className="book-action">
                <a href="#contact" className="btn-book">
                  Download Free
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    label: "Open Access Publishing",
    heading: "Advancing Medical Science, One Journal at a Time",
    sub: "Peer-reviewed research across cardiology, neurology, nanomedicine, and 40+ medical disciplines.",
    cta: "Explore Journals",
    ctaHref: "#journals",
    cta2: "Submit Manuscript",
    cta2Href: "#contact",
  },
  {
    label: "Global eBook Library",
    heading: "Medical Knowledge at Your Fingertips",
    sub: "Download authoritative eBooks curated by leading medical researchers.",
    cta: "Browse eBooks",
    ctaHref: "#ebooks",
    cta2: "Learn More",
    cta2Href: "#about",
  },
  {
    label: "International Conferences",
    heading: "Connect with the World's Leading Medical Minds",
    sub: "Join discussions on the latest advancements in medicine.",
    cta: "View Conferences",
    ctaHref: "#conferences",
    cta2: "Contact Us",
    cta2Href: "#contact",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    if (i === current) return;

    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />

      <div className="container hero-content">
        <div className={`hero-text ${animating ? 'animating' : ''}`}>
          <div className="section-label">{slide.label}</div>
          <h1 className="hero-heading">{slide.heading}</h1>
          <p className="hero-sub">{slide.sub}</p>

          <div className="hero-actions">
            <a href={slide.ctaHref} className="btn btn-primary">{slide.cta}</a>
            <a href={slide.cta2Href} className="btn btn-outline">{slide.cta2}</a>
          </div>

          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="hero-cards">
          <div className="hero-stat-card">
            <div className="stat-icon">📰</div>
            <div className="stat-num">45+</div>
            <div className="stat-lbl">Active Journals</div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-num">2800+</div>
            <div className="stat-lbl">Articles Published</div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon">🌍</div>
            <div className="stat-num">120+</div>
            <div className="stat-lbl">Countries</div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon">👨‍🔬</div>
            <div className="stat-num">12K+</div>
            <div className="stat-lbl">Authors Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
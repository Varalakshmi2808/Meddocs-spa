import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journals from './components/Journals';
import Articles from './components/Articles';
import Ebooks from './components/Ebooks';
import Conferences from './components/Conferences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllJournals from './components/AllJournals';
import './App.css';

function ScrollToSection() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);
  return null;
}

function Home() {
  return (
    <div className="App" style={{color: 'black'}}>
      <ScrollToSection />
      <Navbar />
      <Hero />
      <About />
      <Journals />
      <Articles />
      <Ebooks />
      <Conferences />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-journals" element={<AllJournals />} />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible ? (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  ) : null;
}

export default App;

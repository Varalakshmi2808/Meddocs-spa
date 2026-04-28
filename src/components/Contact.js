import React, { useState } from 'react';
import './Contact.css';

const IconPin = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconSend = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const contactItems = [
  {
    icon: <IconPin />,
    label: 'Address',
    content: <>Suite 200-A, 401 Ryland St,<br />Reno, NV 89502, United States</>,
  },
  {
    icon: <IconMail />,
    label: 'Email',
    content: <a href="mailto:support@meddocsonline.org">support@meddocsonline.org</a>,
  },
  {
    icon: <IconPhone />,
    label: 'WhatsApp',
    content: <a href="tel:+16087186264">+1 (608) 718-6264</a>,
  },
];

const quickLinks = [
  'Submit Manuscript',
  'Author Guidelines',
  'Join as Reviewer',
  'Open Access Policy',
  'Peer Review Process',
  'Publication Fees',
];

const subjects = [
  'Manuscript Submission',
  'Join as Reviewer',
  'Conference Inquiry',
  'eBook Download',
  'Membership',
  'General Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info panel */}
          <div className="contact-info animate-fade-up">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-heading">Contact Us</h2>
            <p className="contact-desc">
              Have questions about submitting a manuscript, joining as a reviewer, or organizing a conference? We're here to help.
            </p>

            <div className="contact-items">
              {contactItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="ci-icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-links">
              <h4>Quick Links</h4>
              <div className="qlinks-grid">
                {quickLinks.map((l) => (
                  <a key={l} href="#contact" className="qlink">{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-form-wrap animate-fade-up delay-2">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon"><IconCheck /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Dr. John Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@university.edu" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject...</option>
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us how we can help..." required />
                </div>

                <button type="submit" className="btn form-submit">
                  Send Message
                  <IconSend />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

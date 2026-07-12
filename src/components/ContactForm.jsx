'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const emailRecipient = 'projexel.engr@gmail.com';
    const mailtoSubject = encodeURIComponent(formData.subject);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${emailRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Redirect to mailto
    window.location.href = mailtoUrl;

    // Show dynamic success state
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="glass-panel contact-form-card" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}>
        <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', display: 'inline-block', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}>✉️</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--clr-text)' }}>Message Prepared!</h3>
          <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', fontSize: '1rem', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>
            We have pre-filled the message in your mail client. Please send the email to finish reaching us.
          </p>
          <button onClick={handleReset} className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}>Send Another Message</button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel contact-form-card">
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '2rem' }}>Send us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="john@company.com"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            placeholder="Project Inquiry"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
      </form>
    </div>
  );
}

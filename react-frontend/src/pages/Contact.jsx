import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Read form data manually to avoid any React state freezing bugs
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resData => {
        alert('Thank you! Your message has been sent.');
        formRef.current.reset(); // clear text fields
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <div className="hero">
        <h1 className="gradient-text">Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="grid cols-2">
        <div className="card card-primary">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> hello@aicodin.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94025</p>
          <p><strong>Hours:</strong> Mon - Fri, 9AM - 6PM EST</p>
          <div className="notice" style={{ marginTop: '1rem' }}>
            We typically respond within 24 hours
          </div>
        </div>

        <div className="card card-accent">
          <h3>Contact Form</h3>
          <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required style={{ marginTop: '0.5rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required style={{ marginTop: '0.5rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required style={{ marginTop: '0.5rem' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(6,182,212,0.05))' }}>
        <h2>Why Contact Us?</h2>
        <ul className="feature-list">
          <li>Questions about our courses and programs</li>
          <li>Partnership and collaboration opportunities</li>
          <li>Technical support and assistance</li>
          <li>Career opportunities at AICODIN</li>
          <li>Feedback and suggestions</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

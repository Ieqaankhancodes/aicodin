import React from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">Help & Support Center</h1>
        <p>Find answers and get support for your questions</p>
      </div>

      <div style={{ marginBottom: '2rem' }} className="fade-in">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="grid cols-2">
        <div className="card card-primary fade-in">
          <h3>How do I get started?</h3>
          <p>Simply sign up on our website, choose a course that interests you, and start learning. You'll have access to all course materials immediately.</p>
        </div>

        <div className="card card-secondary fade-in">
          <h3>What's the difference between courses?</h3>
          <p>Our beginner courses cover fundamentals, intermediate courses build on those skills, and advanced courses include real-world projects and certifications.</p>
        </div>

        <div className="card card-accent fade-in">
          <h3>Do you offer certificates?</h3>
          <p>Yes! Upon completing any course, you'll receive a certificate of completion that you can add to your resume and LinkedIn profile.</p>
        </div>

        <div className="card card-success fade-in">
          <h3>Is there a money-back guarantee?</h3>
          <p>We offer a 30-day money-back guarantee if you're not satisfied with our courses for any reason.</p>
        </div>

        <div className="card card-danger fade-in">
          <h3>Can I access courses offline?</h3>
          <p>All course materials can be downloaded for offline access. You can learn at your own pace, whenever and wherever you want.</p>
        </div>

        <div className="card fade-in" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)' }}>
          <h3>How do I get mentor support?</h3>
          <p>Premium members get access to live mentor sessions twice a week. You can also post questions in our community forum for quick responses.</p>
        </div>
      </div>

      <div className="card fade-in" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(6,182,212,0.05))' }}>
        <h2>Still Need Help?</h2>
        <p>If you couldn't find the answer you're looking for, here are other ways to get support:</p>
        <ul className="feature-list">
          <li><strong>Live Chat:</strong> Available 9AM - 6PM EST on weekdays</li>
          <li><strong>Email Support:</strong> support@aicodin.com (Response within 24 hours)</li>
          <li><strong>Community Forum:</strong> Ask questions and learn from other students</li>
          <li><strong>Video Tutorials:</strong> Step-by-step guides for common issues</li>
          <li><strong>Schedule a Call:</strong> Book a 1-on-1 session with our support team</li>
        </ul>
        <button className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Support</button>
      </div>
    </div>
  );
};

export default Help;

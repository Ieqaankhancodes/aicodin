import React, { useState, useEffect } from 'react';

const Home = () => {
  const [serverTime, setServerTime] = useState(null);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showAlert = () => {
    alert("Get Started Today feature coming soon!");
  };

  // Optional: Connect to backend for dynamic time
  useEffect(() => {
    fetch('http://localhost:3000/api/time')
      .then(res => res.json())
      .then(data => setServerTime(new Date(data.time).toLocaleString()))
      .catch(err => console.error("Could not fetch server time", err));
  }, []);

  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">Welcome to AICODIN</h1>
        <p>Master web development and coding with hands-on projects and expert mentorship</p>
        <button className="btn btn-primary" onClick={scrollToFeatures}>Explore Courses</button>
      </div>

      <div className="grid cols-3" id="features" style={{ marginTop: '3rem' }}>
        <div className="card card-primary fade-in">
          <h3>Learn Coding</h3>
          <p>Comprehensive courses covering HTML, CSS, JavaScript, React, Node.js, and more.</p>
          <p className="muted">Beginner to Advanced</p>
        </div>

        <div className="card card-secondary fade-in">
          <h3>Build Projects</h3>
          <p>Work on real-world projects to build a strong portfolio that impresses employers.</p>
          <p className="muted">Hands-on Experience</p>
        </div>

        <div className="card card-accent fade-in">
          <h3>Get Mentorship</h3>
          <p>Learn from experienced developers and get guidance on your coding journey.</p>
          <p className="muted">Expert Support</p>
        </div>

        <div className="card card-success fade-in">
          <h3>Achieve Your Goals</h3>
          <p>Complete courses, earn certificates, and launch your tech career with confidence.</p>
          <p className="muted">Career Growth</p>
        </div>

        <div className="card card-danger fade-in">
          <h3>Stay Updated</h3>
          <p>Learn the latest technologies and best practices in the ever-evolving tech world.</p>
          <p className="muted">Current Content</p>
        </div>

        <div className="card fade-in" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)' }}>
          <h3>Join Community</h3>
          <p>Connect with thousands of learners, share knowledge, and grow together.</p>
          <p className="muted">Supportive Network</p>
        </div>
      </div>

      <div className="card fade-in" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.08))', border: '2px solid rgba(37,99,235,0.2)' }}>
        <h2>Why Choose AICODIN?</h2>
        <ul className="feature-list">
          <li>Industry-standard curriculum designed by experienced professionals</li>
          <li>Lifetime access to course materials and updates</li>
          <li>30-day money-back guarantee on all courses</li>
          <li>Active community forum with peer and instructor support</li>
          <li>Job placement assistance and career guidance</li>
          <li>Regular live Q&A sessions and workshops</li>
        </ul>
        <button className="btn btn-primary" onClick={showAlert}>Get Started Today</button>
      </div>

      {serverTime && (
        <div id="serverTime" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(37,99,235,0.05)', borderRadius: '8px', textAlign: 'center' }}>
          Server Time: {serverTime}
        </div>
      )}
    </div>
  );
};

export default Home;

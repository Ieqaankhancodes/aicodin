import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">Our Services</h1>
        <p>Comprehensive learning and development solutions</p>
      </div>

      <div className="grid cols-3">
        <div className="card card-primary fade-in">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, JavaScript, and modern frameworks like React and Vue.js</p>
          <span className="badge">Popular</span>
        </div>

        <div className="card card-secondary fade-in">
          <h3>Backend Development</h3>
          <p>Master Node.js, Express, Database design, and API development</p>
          <span className="badge badge-secondary">Advanced</span>
        </div>

        <div className="card card-accent fade-in">
          <h3>Full Stack Projects</h3>
          <p>Build complete applications from frontend to backend with real-world scenarios</p>
          <span className="badge">Premium</span>
        </div>

        <div className="card card-success fade-in">
          <h3>Mobile Development</h3>
          <p>Create responsive mobile apps using modern frameworks and tools</p>
          <span className="badge">New</span>
        </div>

        <div className="card card-danger fade-in">
          <h3>DevOps & Deployment</h3>
          <p>Learn Git, Docker, CI/CD pipelines, and deployment on cloud platforms</p>
          <span className="badge">Essential</span>
        </div>

        <div className="card fade-in" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)' }}>
          <h3>Career Mentoring</h3>
          <p>Get guidance on career path, resume building, and interview preparation</p>
          <span className="badge">1-on-1</span>
        </div>
      </div>
    </div>
  );
};

export default Services;

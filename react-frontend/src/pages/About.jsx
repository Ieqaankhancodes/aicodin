import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">About AICODIN</h1>
        <p>Learn more about our mission and vision</p>
      </div>

      <div className="grid cols-2">
        <div className="card card-primary fade-in">
          <h3>Our Mission</h3>
          <p>We aim to provide the best educational platform for students to learn coding and web development with hands-on experience.</p>
          <ul className="feature-list">
            <li>Learn practical skills</li>
            <li>Expert mentorship</li>
            <li>Community support</li>
          </ul>
        </div>

        <div className="card card-accent fade-in">
          <h3>Our Vision</h3>
          <p>To create a world where everyone has access to quality tech education and can pursue their dreams in technology.</p>
          <ul className="feature-list">
            <li>Accessible learning</li>
            <li>Global community</li>
            <li>Career growth</li>
          </ul>
        </div>
      </div>

      <div className="card fade-in" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(6,182,212,0.05))' }}>
        <h2>Why Choose AICODIN?</h2>
        <p>AICODIN has been helping thousands of students achieve their coding goals since 2020. Our comprehensive curriculum covers everything from basics to advanced topics.</p>
        <button className="btn btn-primary">Start Learning Today</button>
      </div>
    </div>
  );
};

export default About;

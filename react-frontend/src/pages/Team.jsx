import React from 'react';

const Team = () => {
  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">Meet Our Team</h1>
        <p>Experienced educators passionate about helping students succeed</p>
      </div>

      <div className="grid cols-3">
        <div className="card card-primary fade-in" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', margin: '0 auto 1rem' }}></div>
          <h3>Alex Johnson</h3>
          <p><strong>Lead Instructor</strong></p>
          <p className="muted">10+ years of web development experience</p>
        </div>

        <div className="card card-secondary fade-in" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #9333ea)', margin: '0 auto 1rem' }}></div>
          <h3>Sarah Chen</h3>
          <p><strong>Backend Specialist</strong></p>
          <p className="muted">Expert in Node.js and database design</p>
        </div>

        <div className="card card-accent fade-in" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', margin: '0 auto 1rem' }}></div>
          <h3>Mike Rodriguez</h3>
          <p><strong>Frontend Developer</strong></p>
          <p className="muted">React and modern JavaScript specialist</p>
        </div>

        <div className="card card-success fade-in" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #16a34a, #15803d)', margin: '0 auto 1rem' }}></div>
          <h3>Emma Wilson</h3>
          <p><strong>Career Coach</strong></p>
          <p className="muted">Helping students land their dream jobs</p>
        </div>

        <div className="card card-danger fade-in" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #ef4444, #dc2626)', margin: '0 auto 1rem' }}></div>
          <h3>David Kumar</h3>
          <p><strong>DevOps Engineer</strong></p>
          <p className="muted">Mastering deployment and cloud technologies</p>
        </div>

        <div className="card fade-in" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #ea580c)', margin: '0 auto 1rem' }}></div>
          <h3>Lisa Anderson</h3>
          <p><strong>Community Manager</strong></p>
          <p className="muted">Building and nurturing our student community</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

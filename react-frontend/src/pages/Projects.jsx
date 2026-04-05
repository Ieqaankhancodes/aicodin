import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="hero fade-in">
        <h1 className="gradient-text">Student Projects</h1>
        <p>Showcase of amazing projects built by our students</p>
      </div>

      <div className="grid cols-2">
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => {
            let bgStyle = {};
            if (project.badge_color === 'transparent') {
                bgStyle = { background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)' };
            }
            
            return (
              <div key={project.id} className={`card ${project.badge_color !== 'transparent' ? `card-${project.badge_color}` : ''}`} style={bgStyle}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn btn-outline" onClick={() => window.location.href = project.link || '#'}>View Details</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Projects;

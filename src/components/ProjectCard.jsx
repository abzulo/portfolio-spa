import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;

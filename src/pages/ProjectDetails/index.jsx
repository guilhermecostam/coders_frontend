import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProjectDetails() {
  const projectId = useParams();
  const [project, setProject] = useState(null);
  console.log(projectId);

  useEffect(() => {
    // Recupera os dados do projeto do servidor
    fetch(`/projects/${projectId}`)
      .then((response) => response.json())
      .then((projectData) => setProject(projectData));
  }, []);

  if (!project) {
    // Exibe uma mensagem de carregamento enquanto os dados do projeto estão sendo recuperados
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link to="/projects">Voltar</Link>
    </div>
  );
}

export default ProjectDetails;

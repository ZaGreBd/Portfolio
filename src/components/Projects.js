import React, { useEffect, useState } from "react";
// import "./Projects.css";

import Project from "./components_comuns/Project";

function Projects() {
  const [repositories, setRespositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ZaGreBd/repos")
      .then((response) => response.json())
      .then((data) => setRespositories(data));
  }, []);

  return (
    <div className="projects">
      <div className="projects_title">
        <h1>Meus projetos</h1>
      </div>
      <div className="projects_container">
        <ul>
          {repositories.map((repository) => {
            return <Project repository={repository} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

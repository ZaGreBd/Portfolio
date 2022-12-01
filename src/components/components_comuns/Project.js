import React from "react";
import "./Project.css";

import folder from "../../assets/icons/folder.svg";
import star from "../../assets/icons/star.svg";
import branch from "../../assets/icons/git-branch.svg";
import Language from "./Language";

function Project(props) {
  let project_name = props.repository.name.split("-").join(" ");

  return (
    <a href={props.repository.html_url} target="_blank" rel="noreferrer" className="project_anchor">
      <li className="project">
        <div className="project_title">
          <img src={folder} alt="ícone de pasta" />
          <h4>{project_name}</h4>
        </div>
        <div className="project_description">
          <h6>{props.repository.description}</h6>
        </div>
        <div className="project_props">
          <div className="project_stats">
            <div className="project_star">
              <img src={star} alt="ícone de estrela" />
              <p>{props.repository.stargazers_count}</p>
            </div>
            <div className="project_branch">
              <img src={branch} alt="ícone de branch" />
              <p>{props.repository.forks_count}</p>
            </div>
          </div>
          <div className="project_language">
            <Language language={props.repository.language} />
            <p>{props.repository.language}</p>
          </div>
        </div>
      </li>
    </a>
  );
}

export default Project;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
<<<<<<< HEAD
import styled from "styled-components";

export default function TopProject(props) {
  return (
    <ProjectWrapper style={{ flexFlow: props.direction }}>
      <picture>
        <source media="(max-width: 800px)" srcSet="/" />
        <source media="(max-width: 500px)" srcSet="/" />
=======

function TopProject(props) {
  return (
    <div className="top-project">
      <picture>
        <source media="(max-width: 800px)" srcSet="/"  />
        <source media="(max-width: 500px)" srcSet="/"  />
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
        <img src={props.image} alt="project one" width="700px" height="500px" />
      </picture>
      <div className="aside-info">
        <h4>{props.title}</h4>
        <p>{props.summary}</p>
        <span>{props.tech}</span>
        <div className="external">
<<<<<<< HEAD
          <a href={props.code} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
=======
          <a href={props.code}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={props.link}>
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
          </a>
        </div>
      </div>
<<<<<<< HEAD
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: black;
    }
    a:hover {
      color: gray;
    }
  }

  .aside-info h4 {
    font-size: 150%;
    color: #151513;
    margin: 1em;
  }
  .aside-info {
    font-size: 120%;
    font-weight: 700;
    width: 400px;
    height: 250px;
    text-align: justify;
    color: #0a192f;
    border-radius: 15px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;

    a {
      margin: 0.1em;
    }
  }

  .external {
    align-self: flex-start;
    margin-top: 1em;
  }
`;
=======
    </div>
  );
}

export default TopProject;
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92

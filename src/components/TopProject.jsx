import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function TopProject(props) {
  return (
    <ProjectWrapper style={{ flexFlow: props.direction }}>
      <picture>
        <source media="(max-width: 320px)" srcSet={props.smallPhone} />
        <source media="(max-width: 500px)" srcSet={props.phone} />
        <img src={props.image} alt="project" />
      </picture>
      <div className="aside-info">
        <h4>{props.title}</h4>
        <p>{props.summary}</p>
        <span>{props.tech}</span>
        <div className="external">
          <a href={props.code} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
          </a>
        </div>
      </div>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${({ theme }) => theme.projectTitle};
    }
    a:hover {
      color: var(--primary-link);
    }
  }

  .aside-info h4 {
    font-size: 150%;
    color: ${({ theme }) => theme.projectTitle};
    margin: 1em;
  }
  .aside-info {
    font-size: 120%;
    font-weight: 700;
    width: 400px;
    height: 250px;
    text-align: justify;
    color: ${({ theme }) => theme.projectText};
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
  @media only screen and (max-width: 500px) {
    & {
      padding: 1em;
    }
  }
`;

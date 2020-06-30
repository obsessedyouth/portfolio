import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

/*special shout out to florin-pop for this excellent
 * way to structure data in a timeline
 * curious about the original implementation?
 * https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/*/

export default class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        heading: "Federal University of Technology, Minna",
        text:
          "An ongoing five year bachelor of engineering resulting in a research project into the electrochemical" +
          " performance of maize straw in solid oxide direct carbon fuel cell modelled and simulated using python3 " +
          "and the anaconda distribution.",
        date: "2015 - Present",
        category: {
          tag: "degree (b.eng)",
          color: "#648fcf",
        },
        link: {
          url: "https://academia.edu",
          text: "read research paper",
        },
      },
    };
  }
  render() {
    return (
      <TimelineItemWrapper>
        <div className="timeline-item-content">
          <span
            className="tag"
            style={{ background: this.state.data.category.color }}
          >
            {this.state.data.category.tag}
          </span>
          <span id="date">{this.state.data.date}</span>
          <h5>
            <a
              href="https://www.futminna.edu.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.data.heading}
            </a>
          </h5>
          <p>{this.state.data.text}</p>
          <del>
            <a
              href={this.state.data.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.data.link.text} {" "}
              (suspended due to covid-19)
            </a>
          </del>
          <span className="circle">
            <FontAwesomeIcon icon={faGraduationCap} color="#777" size="1x" />
          </span>
        </div>
      </TimelineItemWrapper>
    );
  }
}

const TimelineItemWrapper = styled.div`
  /*Timeline*/
  & {
    display: flex;
    position: relative;
    margin: 3em 0 0.5em;
    width: 70%;
  }

  &:nth-child(odd) {
    align-self: center;
    justify-content: center;
  }

  /*Uncomment When you expand the education section */
  /* &:nth-child(even) {
    align-self: center;
    justify-content: center;
  }
  */

  .timeline-item-content {
    background-color: ${({ theme }) => theme.focus};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 15px;
    width: 100%;
  }

  /*pin*/
  .timeline-item-content::after {
    content: " ";
    background-color: ${({ theme }) => theme.focus};
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  /*pin positioning and display */
  &:nth-child(odd) .timeline-item-content::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  /*badge*/
  .timeline-item-content .tag {
    color: ${({ theme }) => theme.skillFocus};
    font-size: 12px;
    font-weight: bold;
    top: 5px;
    left: 5px;
    letter-spacing: 1px;
    padding: 0.5em;
    position: absolute;
    text-transform: uppercase;
  }

  /*badge position to left */
  &:nth-child(odd) .timeline-item-content .tag {
    left: auto;
    right: 5px;
  }

  .timeline-item-content p {
    font-size: 16px;
    line-height: 24px;
    margin: 1em 0;
  }

  .timeline-item-content a {
    font-size: 14px;
    font-weight: bold;
    color: #2574a9;
  }

  .timeline-item-content h5 a {
    font-size: 150%;
    color: #2574a9;
    font-weight: bold;
    text-decoration: none;
  }

  /*circle pinned*/
  .timeline-item-content .circle {
    background-color: ${({ theme }) => theme.skillFocus};
    border: 3px solid #777;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 13px);
    right: -40px;
    width: 20px;
    height: 20px;
  }

  &:nth-child(odd) .timeline-item-content .circle {
    right: auto;
    left: -40px;
  }

  #date {
    font-weight: 700;
    color: #939393;
  }
  
  p {
    color: ${({ theme }) => theme.projectText} ;
  }

  @media only screen and (max-width: 500px) {
    & {
      width: 85%;
    }
    .timeline-item-content .tag {
      font-size: 10px;
      padding: 0.3em;
    }
    .timeline-item-content {
      padding-top: 2em;
    }
  }

  @media only screen and (max-width: 425px) {
    & {
      width: 70%;
    }
  }
`;

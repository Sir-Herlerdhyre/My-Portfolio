// Component: Portfolio
// Description: Displays portfolio projects with hover-over animated details.

import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import './Styles.css';
import blogAppImage from "./Images/Blog Website.png";
import ecommerceImage from "./Images/E-commerce Website.png";

// Project data
const projects = [
  {
    title: "E-commerce Website",
    type: "Basic",
    image: ecommerceImage,
    link: "https://sir-herlerdhyre.github.io/E-commerce/",
  },
  {
    title: "React Blog App",
    type: "React",
    image: blogAppImage,
    link: "https://sir-herlerdhyre.github.io/Blog-website/",
  },
];

// Skill types
const tools = {
  React: "REACT",
  Basic: "HTML, CSS, BOOTSTRAP & JS",
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      {/* Section Header */}
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaProjectDiagram size={40} />}
      />

      {/* Project Grid */}
      <div className="project-container">
        {projects.map((project, index) => (
          <div
            className="project-card animated-fadeInUp"
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="overlay">
                <p>{project.title}</p>
                <br />
                <span>{tools[project.type] || "Website Project"}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

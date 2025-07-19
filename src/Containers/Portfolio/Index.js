import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import "./Styles.css";
import blogAppImage from "./Images/Blog Website.png";
import ecommerceImage from "./Images/E-commerce Website.png";
import budgetPlannerImage from "./Images/Budget Planner.png";
import toDoListImage from "./Images/Todo List.png";
import weatherAppImage from "./Images/Weather Application.png";

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

  {
    title: "Budget Planner",
    type: "JS",
    image: budgetPlannerImage,
    link: "https://sir-herlerdhyre.github.io/mini-budget/",
  },

  {
    title: "Todo List",
    type: "Vite",
    image: toDoListImage,
    link: "https://sir-herlerdhyre.github.io/Todo-list/",
  },
  {
    title: "Weather Application",
    type: "JS",
    image: weatherAppImage,
    link: "https://sir-herlerdhyre.github.io/Weather-app/",
  },
];

// Skill types
const tools = {
  React: "REACT",
  Basic: "HTML, CSS, BOOTSTRAP & JS",
  JS: "HTML, CSS & JS",
  Vite: "VITE + REACT",
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

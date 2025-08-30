import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import "./Styles.css";
import blogAppImage from "./Images/Blog Website.png";
import ecommerceImage from "./Images/E-commerce Website.png";
import budgetPlannerImage from "./Images/Budget Planner.png";
import toDoListImage from "./Images/Todo List.png";
import weatherAppImage from "./Images/Weather Application.png";
import billSplitterImage from "./Images/Bill Splitter.png";
import cakeHubImage from "./Images/Cake hub.png";
import currencyConverterImage from "./Images/Currency Converter.png";
import movieOclockImage from "./Images/Movie Oclock.png";
import picnicParkImage from "./Images/Picnic Park.png";

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
  {
    title: "Bill Splitter",
    type: "React",
    image: billSplitterImage,
    link: "https://sir-herlerdhyre.github.io/bill-splitter/",
  },
  {
    title: "Cake Hub",
    type: "React",
    image: cakeHubImage,
    link: "https://sir-herlerdhyre.github.io/cake-hub/",
  },
  {
    title: "Currency Converter",
    type: "React",
    image: currencyConverterImage,
    link: "https://sir-herlerdhyre.github.io/currency-converter/",
  },
  {
    title: "Movie O'Clock",
    type: "React",
    image: movieOclockImage,
    link: "https://sir-herlerdhyre.github.io/Movie-Oclock/",
  },
  {
    title: "Picnic Park",
    type: "React",
    image: picnicParkImage,
    link: "https://sir-herlerdhyre.github.io/Picnic-Park/",
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

import React from "react";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import { FaTools } from "react-icons/fa";
import "./Styles.css";
import htmlLogo from "./Images/html logo.png";
import cssLogo from "./Images/css logo.png";
import jsLogo from "./Images/javascript logo.png";
import reactLogo from "./Images/React Logo.png";
import bootstrapLogo from "./Images/bootstrap logo.png";
import nodeLogo from "./Images/nodejs logo.png";
import tailwindLogo from "./Images/Tailwind logo.png";

// Skill data with logo paths
const skillsData = [
  {
    label: "FRONTEND",
    icons: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  {
    label: "BACKEND",
    icons: [{ name: "Node.js", logo: nodeLogo }],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      {/* Section header */}
      <PageHeaderContent headerText="My Skills" icon={<FaTools size={40} />} />

      <div className="skills-section animated-fadeInUp">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category-container">
            <h3 className="skill-category-title">{category.label}</h3>
            <div className="skill-icon-grid">
              {category.icons.map((item, i) => (
                <div key={i} className="skill-icon" title={item.name}>
                  <img src={item.logo} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

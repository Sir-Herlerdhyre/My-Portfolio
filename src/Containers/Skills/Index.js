// Component: Skills
// Description: Displays a list of frontend skills using progress bars.

import React from "react";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import { FaTools } from "react-icons/fa";
import { Line } from "rc-progress";
import './Styles.css';

// Skill data
const skillsData = [
  {
    Label : "FRONTEND SKILLS",
    data: [
      { skillName: "HTML", percentage: "90" },
      { skillName: "CSS", percentage: "80" },
      { skillName: "JAVASCRIPT", percentage: "80" },
      { skillName: "BOOTSTRAP", percentage: "75" },
      { skillName: "REACT", percentage: "75" },
    ],
  },

  {
    Label : "BACKEND SKILLS",
    data: [
      {skillName : "NODE.JS", percentage : "50"}
    ]

  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      {/* Section header */}
      <PageHeaderContent
        headerText="My Skills"
        icon={<FaTools size={40} />}
      />

      {/* Skills container */}
      <div className="skills-section animated-fadeInUp">
        
        <div className="progress-bar-container">
          {skillsData.map((item, index) => ( <div key={index} className="skill-group">
            
    <h3 className="skill-category">{item.Label}</h3>
    {item.data.map((skillItem, i) => (
      <div className="progress-bar" key={skillItem.skillName}>
        <div className="progress-info">
          <p>{skillItem.skillName}</p>
          <span className="progress-label">{skillItem.percentage}%</span>
        </div>
        <Line
          percent={skillItem.percentage}
          strokeWidth="2"
          strokeColor="black"
          trailWidth="2"
          strokeLinecap="square"
        />
      </div>
    ))}
  </div>
))}


        </div>
      </div>
    </section>
  );
};

export default Skills;

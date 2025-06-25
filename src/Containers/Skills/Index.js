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
    data: [
      { skillName: "HTML", percentage: "90" },
      { skillName: "CSS", percentage: "80" },
      { skillName: "JAVASCRIPT", percentage: "80" },
      { skillName: "BOOTSTRAP", percentage: "75" },
      { skillName: "REACT", percentage: "75" },
    ],
  },
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
        <h3 className="title">FRONTEND SKILLS</h3>

        {/* Loop through and display progress bars */}
        <div className="progress-bar-container">
          {skillsData.map((item, index) =>
            item.data.map((skillItem, i) => (
              <div className="progress-bar" key={`${index}-${i}`}>
                <p>{skillItem.skillName}</p>
                <div className="progress-wrapper">
                  <Line
                    percent={skillItem.percentage}
                    strokeWidth="2"
                    strokeColor="black"
                    trailWidth="2"
                    strokeLinecap="square"
                  />
                  <span className="progress-label">
                    {skillItem.percentage}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Component: About
// Description: Introduction and summary of the developer's background and skills.

import React from "react";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import './Styles.css';
import { FaUserCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        {/* Page header component with icon */}
        <PageHeaderContent
          headerText="About Me "
          icon={<FaUserCircle size={40} />}
        />
      </section>

      {/* Summary headline */}
      <div className="about-summary animated-right">
        <h3>Who is Sir Herlerdhyre?</h3>
      </div>

      {/* Description paragraph */}
      <div className="about-summary-paragraph animated-left">
        <p>
          I'm Aladire Soliu Babatunde, also known as Sir Herlerdhyre — a passionate and detail-oriented frontend developer with a knack for building clean, responsive, and user-friendly web interfaces.
          <br /><br />
          My toolkit includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. I enjoy turning ideas into interactive, accessible websites that look great on any device.
          <br /><br />
          Whether it's creating landing pages, portfolios, or dynamic single-page applications, I aim to write elegant code and deliver meaningful digital experiences.
        </p>
      </div>
    </>
  );
};

export default About;

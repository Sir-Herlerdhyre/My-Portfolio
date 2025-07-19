import React from "react";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import "./Styles.css";
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
          I'm Aladire Soliu Babatunde, also known as Sir Herlerdhyre — a
          passionate and detail-oriented frontend developer with a strong
          interest in building clean, responsive, and user-friendly web
          interfaces.
          <br />
          With a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>
          , <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and{" "}
          <strong>React</strong>, I specialize in translating design concepts
          into functional, accessible, and visually appealing website
          applications. My focus is on delivering solutions that are both
          user-centered and technically sound.
          <br />
          <br />
          Beyond code, I’m a curious learner who enjoys solving problems and
          working collaboratively to bring ideas to life through the browser.
        </p>
      </div>
    </>
  );
};

export default About;

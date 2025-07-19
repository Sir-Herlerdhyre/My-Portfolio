import React from "react";
import "./Styles.css";
import Logo from "./Images/Sir-Herlerdhyre.png";
import MyCV from "./Aladire_Soliu_Frontend_Intern_CV.pdf";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/Contact");
  };

  return (
    <div id="home" className="home">
      <div className="home-content">
        {/* Text section */}
        <div className="home-text animated-left">
          <h3>Hello 👋</h3>
          <h1>
            I'm <span>Sir Herlerdhyre</span>
          </h1>
          <p>
            I'm a frontend developer passionate about building clean,
            responsive, and user-friendly web interfaces.
            <br />
            <br />
            Want to know more about me?
          </p>
          <div className="home-buttons">
            <button
              className="btn resume-btn animated-bottom"
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>

            <a
              href={MyCV}
              download="Aladire_Soliu_Frontend_Intern_CV.pdf"
              className="btn resume-btn animated-bottom"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="home-image animated-right">
          <img src={Logo} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

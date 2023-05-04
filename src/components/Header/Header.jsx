import React from "react";
import "./Header.css";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-title">
            <p className="title-initial">J</p>
            <p className="title-rest">oaquin</p>
            <p className="title-initial">B</p>
            <p className="title-rest">ohn</p>
          </div>
          <h3>Desarrollador Frontend</h3>
        </div>
        <a href="#about">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </a>
      </div>
      <div id="about">
        <About />
      </div>

      <div>
        <Portfolio />
      </div>
    </>
  );
};

export default Header;

import React, { useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="header" id="header">
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
      <div data-aos="fade-right" id="about">
        <About />
      </div>

      <div data-aos="fade-right" id="portfolio">
        <Portfolio />
      </div>

      <div data-aos="fade-right" id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Header;

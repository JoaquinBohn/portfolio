import React from "react";
import "./About.css";
import {
  DiJavascript1,
  DiCss3,
  DiGit,
  DiHtml5,
  DiReact,
  DiPython,
} from "react-icons/di";

import { SiCplusplus } from "react-icons/si";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          magnam quo delectus neque autem ipsa eveniet nesciunt totam harum,
          praesentium quam, voluptatem assumenda, ad perferendis soluta magni.
          Ex, consequatur facere.
        </p>
      </div>
      <hr className="about-line" />
      <div className="about-icons">
        <DiJavascript1 className="icon" />
        <DiCss3 className="icon" />
        <DiGit className="icon" />
        <DiHtml5 className="icon" />
        <DiReact className="icon" />
        <DiPython className="icon" />
        <SiCplusplus className="icon" />
      </div>
    </div>
  );
};

export default About;

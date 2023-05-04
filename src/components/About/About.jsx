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
import { FcDownload } from "react-icons/fc";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const About = () => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#ff3300",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="about">
      <div className="about-title">
        <p className="title-initial">S</p>
        <p className="title-rest-black">obre mi</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>¿Quién soy?</h2>
          <p className="about-text-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            magnam quo delectus neque autem ipsa eveniet nesciunt totam harum,
            praesentium quam, voluptatem assumenda, ad perferendis soluta magni.
            Ex, consequatur facere.
          </p>
          <a
            href="https://drive.google.com/file/d/1O1CAj0wFsCeVOpUN8Wv0_dGvR1-KAfED/view"
            target="_blank"
            rel="noreferrer"
          >
            <ThemeProvider theme={theme}>
              <Button variant="outlined" endIcon={<FcDownload />}>
                Descargar CV
              </Button>
            </ThemeProvider>
          </a>
        </div>
        <hr className="about-line" />
        <div>
          <h2>Tecnologías que manejo</h2>
          <div className="about-icons">
            <div className="about-skill">
              <DiJavascript1 className="icon" id="js" />
              <p className="skill-name">Javascript</p>
            </div>

            <div className="about-skill">
              <DiCss3 className="icon" id="css" />
              <p className="skill-name">CSS</p>
            </div>

            <div className="about-skill">
              <DiHtml5 className="icon" id="html" />
              <p className="skill-name">Html</p>
            </div>

            <div className="about-skill">
              <DiReact className="icon" id="react" />
              <p className="skill-name">React</p>
            </div>

            <div className="about-skill">
              <DiPython className="icon" id="py" />
              <p className="skill-name">Python</p>
            </div>

            <div className="about-skill">
              <SiCplusplus className="icon" id="cplus" />
              <p className="skill-name">C++</p>
            </div>

            <div className="about-skill">
              <DiGit className="icon" id="git" />
              <p className="skill-name">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

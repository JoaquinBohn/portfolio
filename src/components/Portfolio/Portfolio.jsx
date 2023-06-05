import React from "react";
import "./Portfolio.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { SiGithub } from "react-icons/si";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Portfolio = () => {
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
      secondary: {
        main: "#000000",
        darker: "#242424",
      },
    },
  });

  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <p className="title-initial">P</p>
        <p className="title-rest-black">ortfolio</p>
      </div>
      <p className="portfolio-text">
        Aquí puedes ver los proyectos en los que he trabajado hasta el momento.
      </p>
      <div className="portfolio-galery">
        <div className="outer">
          <div className="project" id="books"></div>
          <div className="project-text">
            <p className="description">E-commerce de libros</p>
            <div className="project-buttons">
              <ThemeProvider theme={theme}>
                <a
                  href="https://github.com/JoaquinBohn/React-Tienda.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<SiGithub />}
                  >
                    Github Repo
                  </Button>
                </a>

                <a
                  href="https://react-tienda-tau.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<BsFillArrowRightSquareFill />}
                  >
                    Visitar sitio
                  </Button>
                </a>
              </ThemeProvider>
            </div>
          </div>
        </div>

        <div className="outer">
          <div className="project" id="hvo"></div>
          <div className="project-text">
            <p className="description">Home de servicio de streaming</p>
            <div className="project-buttons">
              <ThemeProvider theme={theme}>
                <a
                  href="https://github.com/JoaquinBohn/HVO.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<SiGithub />}
                  >
                    Github Repo
                  </Button>
                </a>

                <a
                  href="https://hvo.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<BsFillArrowRightSquareFill />}
                  >
                    Visitar sitio
                  </Button>
                </a>
              </ThemeProvider>
            </div>
          </div>
        </div>

        <div className="outer">
          <div className="project" id="weather"></div>
          <div className="project-text">
            <p className="description">App de clima</p>
            <div className="project-buttons">
              <ThemeProvider theme={theme}>
                <a
                  href="https://github.com/JoaquinBohn/piweather.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<SiGithub />}
                  >
                    Github Repo
                  </Button>
                </a>

                <a
                  href="https://monkeyweather.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "100px", height: "40px", fontSize: "12px" }}
                    endIcon={<BsFillArrowRightSquareFill />}
                  >
                    Visitar sitio
                  </Button>
                </a>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

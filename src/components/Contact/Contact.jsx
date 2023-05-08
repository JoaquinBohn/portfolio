import React from "react";
import "./Contact.css";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <p className="title-initial">C</p>
        <p className="title-rest-black">ontacto</p>
      </div>
      <p className="contact-text">
        Puedes contactarme a traves de las siguientes opciones:
      </p>
      <div className="contact-icons">
        <div className="contact-option">
          <a
            href="mailto: joaquinbohnv@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail className="icon" id="gmail" />
            <p>Correo</p>
          </a>
        </div>

        <div className="contact-option">
          <a
            href="https://github.com/JoaquinBohn"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="icon" id="github" />
            <p>GitHub</p>
          </a>
        </div>

        <div className="contact-option">
          <a
            href="https://www.linkedin.com/in/joaquin-bohn/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="icon" id="linkedin" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <a href="#header">
          <h4>Portada</h4>
        </a>
        <a href="#about">
          <h4>About</h4>
        </a>
        <a href="#portfolio">
          <h4>Portfolio</h4>
        </a>
        <a href="#contact">
          <h4>Contacto</h4>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
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
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require("../assets/logo_mident.png")} alt="Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Sobre a Mident</a>
        <a href="#about">Portfólio</a>
        <a href="#services">Contato</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;

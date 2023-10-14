import React from "react";
import NavLogo from "../images/nav-logo.svg";
import ReactDOM from "react-dom/client";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">

        <div className="logo-title-container">
        
        {/* Logo */}
        <div className="nav-logo">
          <img src={NavLogo} alt="logo" />
        </div>

        {/* Title */}
        <h1 className="nav-title"> ReactFacts</h1>

        </div>


        {/* Sub TItle */}
        <h3 className="nav-sub-title">React Course - Project 1</h3>
      </nav>
    </>
  );
}

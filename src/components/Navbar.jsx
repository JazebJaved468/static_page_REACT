import React from "react";
import NavLogo from "../images/nav-logo.svg";
import ReactDOM from "react-dom/client";
import "../css/navbar.css";

export default function Navbar(props) {
  console.log(props);

  let navbarColor = {
    backgroundColor: props.isDark ? "#21222A" : "#FFFFFF",
  };

  let navTitleColor = {
    color: props.isDark ? "#61DAFB" : "#00ABCA",
  };

  let switchTextColor = {
    lightText : {color: props.isDark ? '#918E9B' : "#2B283A"},
    darkText: {color: props.isDark ? '#FFFFFF' : "#D5D4D8"},
  };

  return (
    <>
      <nav className="navbar" style={navbarColor}>
        <div className="logo-title-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src={NavLogo} alt="logo" />
          </div>

          {/* Title */}
          <h1 className="nav-title" style={navTitleColor}>
            ReactFacts
          </h1>
        </div>

        {/* Sub TItle */}
        {/* <h3 className="nav-sub-title">React Course - Project 1</h3> */}

        <div className="switch-container">
          {/* Light */}
          <p style={switchTextColor.lightText} >Light</p>

          {/* Switch Modes */}
          <label class="switch">
            <input
              type="checkbox"
              onChange={props.onClick}
              name="switch"
              checked={props.isDark}
            />
            <span class="slider round"></span>
          </label>

          {/* Dark */}
          <p  style={switchTextColor.darkText} >Dark</p>
        </div>
      </nav>
    </>
  );
}

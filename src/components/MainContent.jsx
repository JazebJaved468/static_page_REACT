import React from "react";
import ReactDOM from "react-dom/client";
import "../css/mainContent.css";
import lightBgImage from '../images/background-light.svg'
import darkBgImage from '../images/background-dark.svg'

export default function MainContent(props) {

  let contentTextColor = {
  color: props.isDark ?  "#FFFFFF" : "#2B283A",
  }

  let mainContentContainerColor = {
    backgroundColor:  props.isDark  ? "#282D35" : "#FFFFFF",
    boxShadow : props.isDark ?  'inset 0px 4px 4px rgba(0, 0, 0, 0.35)': 'inset 0px 4px 4px rgba(0, 0, 0, 0.15)',
    backgroundImage:  props.isDark  ? `url(${darkBgImage})`: `url(${lightBgImage})`,
  }

  // UI render
  return (
    <div className="main-content-container" style={mainContentContainerColor}>
      {/* Heading */}
      <h1 className="main-content-title" style={contentTextColor}>Fun facts about React</h1>

      {/* List of Points */}
      <ul  className="main-content-list">
        <li style={contentTextColor}>Was first released in 2013</li>
        <li style={contentTextColor}>Was originally created by Jordan Walke</li>
        <li style={contentTextColor}>Has well over 100K stars on GitHub</li>
        <li style={contentTextColor}>Is maintained by Facebook</li>
        <li style={contentTextColor}>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

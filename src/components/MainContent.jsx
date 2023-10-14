import React from "react";
import ReactDOM from "react-dom/client";
import "../css/mainContent.css";

export default function MainContent() {
  return (
    <div className="main-content-container">
      {/* Heading */}
      <h1 className="main-content-title">Fun facts about React</h1>

      {/* List of Points */}
      <ul className="main-content-list">
        <li>Was last released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

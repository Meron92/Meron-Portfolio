import React from "react";
import { Link } from "react-scroll";
import "./header.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`toggle-switch ${isOn ? "night" : ""}`}
    >
      <div className="toggle-switch-slider"></div>
    </div>
  );
};

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <div>
      <div className="navBar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <ToggleSwitch isOn={isDarkMode} handleToggle={toggleTheme} /> */}
      </div>
    </div>
  );
}

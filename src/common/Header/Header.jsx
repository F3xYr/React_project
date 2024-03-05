import React from "react";
import logo from "../../logo.svg"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
      <img src={logo} alt="Logo" className="logo"/>
        <nav>
          <ul className="menu">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
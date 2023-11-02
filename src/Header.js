import React from "react";
import "./Header.css";
import MyLogo from "./MyLogo.png";
import { Link } from "react-router-dom";

function Header() {
  console.log("Rendering Header component");
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={MyLogo} alt="" />
      </Link>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <p>&#128269;</p>
      </div>

      <div className="header__right">
        <p>Become a host</p>
      </div>
    </div>
  );
}

export default Header;

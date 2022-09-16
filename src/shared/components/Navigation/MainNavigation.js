import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawar from "./SideDrawar";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      {/* Compatible with mobile devices */}
      <SideDrawar>
        <nav className="main-navigation__drawar-nav">
          <NavLinks />
        </nav>
      </SideDrawar>

      {/* Compatible with desktop */}
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Explorer</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

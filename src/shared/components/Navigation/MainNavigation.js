import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawar from "./SideDrawar";
import "./MainNavigation.css";
import Backdrop from "../UI/Backdrop";

const MainNavigation = (props) => {
  const [menuIsClicked, setMenuIspen] = useState(false);

  const menuOpenHandler = () => {
    setMenuIspen(true);
  };

  const menuCloseHandler = () => {
    setMenuIspen(false);
  };

  return (
    <React.Fragment>
      {menuIsClicked ? <Backdrop onClick={menuCloseHandler} /> : null}
      {/* Compatible with mobile devices */}
      {/* {menuIsClicked ? ( */}
      <SideDrawar show={menuIsClicked} onClick={menuCloseHandler}>
        <nav className="main-navigation__drawar-nav">
          <NavLinks />
        </nav>
      </SideDrawar>
      {/* ) : null} */}

      {/* Compatible with desktop */}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={menuOpenHandler}>
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

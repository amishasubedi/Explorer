import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawar = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawar" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  //  render side drawar in drawer hook (outside of root)
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawar;

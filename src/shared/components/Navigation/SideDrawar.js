import React from "react";
import ReactDOM from "react-dom";

import "./SideDrawer.css";

const SideDrawar = (props) => {
  const content = <aside className="side-drawar">{props.children}</aside>;

  //  render side drawar in drawer hook (outside of root)
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawar;

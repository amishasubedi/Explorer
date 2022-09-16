import React from "react";

import "./SideDrawer.css";

const SideDrawar = (props) => {
  return <aside className="side-drawar">{props.children}</aside>;
};

export default SideDrawar;

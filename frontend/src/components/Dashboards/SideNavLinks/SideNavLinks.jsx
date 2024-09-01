import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNavLinks(props) {
  return (
    <NavLink
      to={props.url}
      className={({ isActive }) => isActive ? "py-2 px-4 border-y-gray-400 border-y-4 border-double" : ""}
    >
      {props.linkName}
    </NavLink>




  );
}

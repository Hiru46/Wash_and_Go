import React from "react";
import { Link } from "react-router-dom";

export default function SideNavLinks(props) {
  return (
    <Link to={props.url}>{props.linkName}</Link>
  );
}

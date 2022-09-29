import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <>
      <Link
        className="no-underline border-b border-grey-dark text-grey-dark"
        to={props.data}
      >
        {props.content}
      </Link>
    </>
  );
};

export default NavLink;

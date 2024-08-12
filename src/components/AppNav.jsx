import React from "react";
import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink end to="/app">Home</NavLink>
          </li>
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
    // /posts : absolute
    // posts : relative 
  );
}
export default AppNav;
//! NavLink => it is used instead of the Link component in order to add the "active" class to the
//! link. Consequently, we can distinguish the selected link

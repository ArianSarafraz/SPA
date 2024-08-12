import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payments</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

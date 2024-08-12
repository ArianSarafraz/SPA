import React from "react";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <AppNav />
      {/* dynamic content ?   => <Outlet /> */}
      <Outlet />

      <footer style={{ marginTop: "5rem" }}>this is the footer section</footer>
    </>
  );
}

export default Layout;

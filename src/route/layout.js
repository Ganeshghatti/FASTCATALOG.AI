import React from "react";
import Sidebar from "../Component/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex-grow-1 padding-left-sidebar-effect">{children}</div>
    </>
  );
};

export default Layout;

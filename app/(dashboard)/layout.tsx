import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="texst-3xl">DASHBOARD</h1>
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrap">
      <Header />
      <div id="container">
        <div className="inner">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

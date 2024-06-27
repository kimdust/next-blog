import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const post = {
    id: 1,
    title: "Sample Title",
    subtitle: "Sample Subtitle",
    content: "Sample Content",
  };

  return (
    <div id="wrap" className="font-Pretendard">
      <Header post={post} />
      <div id="container">
        <div className="inner">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

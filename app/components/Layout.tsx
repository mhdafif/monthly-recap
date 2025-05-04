import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="relative min-h-dvh w-dvw scroll-smooth bg-white">{children}</div>;
};

export default Layout;

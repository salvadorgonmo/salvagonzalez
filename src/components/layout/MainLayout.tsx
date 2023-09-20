import React from "react";
import { Menu } from "../common/Menu";
import { Footer } from "../common/Footer";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: React.ReactElement;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="">
      <Menu />
      <div className="pt-20 h-full ml-10 mr-10 flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

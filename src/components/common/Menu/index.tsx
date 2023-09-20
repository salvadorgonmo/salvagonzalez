import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MenuIcon } from "@heroicons/react/outline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Menu.scss";

export const Menu = () => {
  const [isHidden, setIsHidden] = useState("slideout-menu");
  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleToggleShowMenu = () => {
    if (isHidden === "slideout-menu") {
      setIsHidden("slidein-menu");
    } else {
      setIsHidden("slideout-menu");
    }
  };

  return (
    <ul className="relative justify-between menu-container bg-white p-2 flex sm:justify-around shadow-2xl menu-wrapper">
      <div className="ml-4 flex sm:hidden">
        <MenuIcon
          className="h-7 cursor-pointer hover:rotate-180 transition hover:text-blue-600 sm:block md:hidden"
          onClick={handleToggleShowMenu}
        />
      </div>
      <div
        id="menu-items"
        className={`${isHidden} sm:ml-0 absolute w-9/12 sm:w-fit h-screen sm:h-fit top-11 left-0 sm:static bg-white z-10 flex-col sm:flex sm:flex-row`}
      >
        <MenuItem
          url="/"
          itemName="Home"
          closeMobileMenu={handleToggleShowMenu}
        />
        <MenuItem
          url="/portfolio"
          itemName="Portfolio"
          closeMobileMenu={handleToggleShowMenu}
        />
        <MenuItem
          url="/resume"
          itemName="Resume"
          closeMobileMenu={handleToggleShowMenu}
        />
        <MenuItem
          url="/blog"
          itemName="Blog"
          closeMobileMenu={handleToggleShowMenu}
        />
        <MenuItem
          url="/contact"
          itemName="Contact me"
          closeMobileMenu={handleToggleShowMenu}
        />
      </div>
      <div className="mr-4 flex items-center">
        <GitHubIcon
          className="cursor-pointer hover:text-blue-600 transition-hover"
          onClick={() => handleRedirect("https://github.com/salvadorgonmo")}
        />
        <LinkedInIcon
          className="ml-4 cursor-pointer hover:text-blue-600 transition-hover"
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/salvadorgonmo/")
          }
        />
      </div>
    </ul>
  );
};

export default Menu;

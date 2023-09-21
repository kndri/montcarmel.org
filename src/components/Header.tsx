import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Adjust the breakpoint as needed

  return (
    <header
      style={{ height: 65, paddingBottom: 75 }}
      className={`relative top-0 left-0 w-screen z-[9999] ${
        transparent ? "bg-transparent" : "bg-black"
      } transition-colors duration-200`}
    >
      <div className="container mx-auto">
        {isDesktop ? (
          <DesktopNav transparent={transparent} />
        ) : (
          <MobileNav transparent={transparent} />
        )}
      </div>
    </header>
  );
};

export default Header;

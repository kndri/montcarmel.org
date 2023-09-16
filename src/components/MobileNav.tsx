import React, { useState } from "react";
import HamburgerMenu from "../components/HamburgeMenu"; // Import the HamburgerMenu component

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative" style={{ top: "60px" }}>
      <div
        className="fixed top-0 left-0 w-full"
        style={{
          zIndex: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Logo */}
        <div className="flex-1 text-center lg:text-left">
          <a
            href="/"
            className={`w-5 whitespace-nowrap hover:text-white text-white tracking-wide uppercase`}
          >
            Mont Carmel
          </a>
        </div>
        {/* Container for the HamburgerMenu */}
        <div className="relative z-50 flex flex-1 justify-end gap-x-5"></div>
      </div>
      {isOpen && (
        <nav
          className="fixed top-0 left-0 w-full h-full bg-white text-black font-bold font-primary flex flex-col items-center justify-start text-2xl font-bold animate-fadeIn delay-200"
          style={{ marginTop: "50px", paddingBottom: "50px", zIndex: 99 }}
        >
          {/* Your mobile navigation links go here */}
          <a
            href="#"
            className="my-2 px-4 py-14 tracking-wide uppercase text-black border-b-2 border-gray w-full font-semibold"
          >
            Link 1
          </a>
          <a
            href="#"
            className="my-2 px-4 py-14 tracking-wide uppercase text-black border-b-2 border-gray w-full font-semibold"
          >
            Link 2
          </a>
          <a
            href="#"
            className="my-2 px-4 py-14 tracking-wide uppercase text-black border-b-2 border-gray w-full font-semibold"
          >
            Link 3
          </a>
          <a
            href="#"
            className="my-2 px-4 py-14 tracking-wide uppercase text-black border-b-2 border-gray w-full font-semibold"
          >
            Link 4
          </a>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;

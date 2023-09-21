import React from "react";
import styled from "styled-components";

interface DesktopNavProps {
  transparent?: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ transparent }) => {
  const navTextColor = "text-black";

  return (
    <nav
      className={`text-white w-screen flex items-center z-[9999] transition-colors duration-200 justify-between flex-wrap p-4 lg:p-6 fixed top-0 left-0 font-bold font-primary uppercase bg-white ${navTextColor}`}
    >
      {/* Logo */}
      <div className="flex-1 text-center lg:text-left">
        <a
          href="/"
          className={`w-5 whitespace-nowrap hover:text-white ${navTextColor}`}
        >
          Mont Carmel
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden flex-1 justify-end gap-x-8 sm:flex lg:justify-center">
        <a
          href="/music"
          className={`text-base no-underline tracking-wide hover:opacity-100 duration-200 transition-opacity hover:text-white target:text-white opacity-100 ${navTextColor}`}
        >
          Music
        </a>
        <a
          href="/tour"
          className={`text-base no-underline tracking-wide hover:opacity-100 duration-200 transition-opacity hover:text-white target:text-white opacity-100 ${navTextColor}`}
        >
          Tour
        </a>
        <a
          href="/resources"
          className={`text-base no-underline tracking-wide hover:opacity-100 duration-200 transition-opacity hover:text-white target:text-white opacity-100 ${navTextColor}`}
        >
          Resources
        </a>
        <a
          href="/shop"
          className={`text-base no-underline tracking-wide hover:opacity-100 duration-200 transition-opacity hover:text-white target:text-white opacity-100 ${navTextColor}`}
        >
          Shop
        </a>
      </div>

      <div className="relative z-50 flex flex-1 justify-end gap-x-5"></div>
    </nav>
  );
};

export default DesktopNav;

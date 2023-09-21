import React, { useState } from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      className="flex-1 lg:hidden pr-0"
      id="headlessui-disclosure-button-1"
      type="button"
      aria-expanded={isOpen ? "true" : "false"}
      data-headlessui-state=""
      onClick={toggleMenu}
    >
      <div
        className="block w-6 h-6 flex items-center justify-center hover:text-white target:text-white"
        aria-hidden="true"
        role="button"
      >
        {isOpen ? (
          // 'X' icon when the menu is open
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66675 1.5L17.9302 17.7635"
              stroke="black"
              strokeWidth="2"
            ></path>
            <path
              d="M1.66675 17.7634L17.9302 1.49997"
              stroke="black"
              strokeWidth="2"
            ></path>
          </svg>
        ) : (
          // Hamburger icon when the menu is closed
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L23 1" stroke="black" strokeWidth="2"></path>
            <path d="M0 9L23 9" stroke="black" strokeWidth="2"></path>
            <path d="M0 17L23 17" stroke="black" strokeWidth="2"></path>
          </svg>
        )}
      </div>
    </button>
  );
};

export default HamburgerMenu;

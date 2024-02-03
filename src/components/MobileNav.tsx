import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link href="#home" className="nav-link-mobile">
          HOME
        </Link>
        <Link href="#services" className="nav-link-mobile">
          SERVICES
        </Link>
        <Link href="#skills" className="nav-link-mobile">
          ABOUT
        </Link>
        <Link href="#projects" className="nav-link-mobile">
          PROJECT
        </Link>
        <Link href="#blog" className="nav-link-mobile">
          BLOG
        </Link>
        <Link href="#footer" className="nav-link-mobile">
          CONTACT
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

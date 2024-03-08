import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141d27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <Link href="#home" className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          Jester
          <span className="text-yellow-300"> Arcas</span>
        </Link>
        <Link href="#home" className="nav-link">
          HOME
        </Link>
        <Link href="#about" className="nav-link">
          ABOUT
        </Link>
        <Link href="#services" className="nav-link">
          SERVICES
        </Link>
        <Link href="#skills" className="nav-link">
          SKILLS
        </Link>
        <Link href="#projects" className="nav-link">
          PROJECTS
        </Link>
        {/* <Link href="#blog" className="nav-link">
          BLOG
        </Link> */}
        <Link href="#footer" className="nav-link">
          CONTACT
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

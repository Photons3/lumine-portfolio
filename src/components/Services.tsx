import {
  CloudIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <MagnifyingGlassIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="texy-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              App Analysis
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Has an experience in debugging programs, scripting, decompiling
              and manipulating memory. Has an experience using IDAPro, Ghidra,
              x64dbg and Cheat Engine in debugging, decompiling and manipulating
              programs.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="texy-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              App Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Has an experience in creating Web Applications and Desktop
              Applications. Has a knowledge in C++, OpenGL, MongoDB, NodeJS,
              ReactJS, NextJS, Python and Tensorflow. Also, has an experience
              creating scripts in Python and Matlab so solve problems
              efficiently.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CloudIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="texy-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Internet of Things
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Has an experience in Arduino, ESP32 and ESPIDF framework.
              Implemented Tensorflow in microcontroller, has an experience in
              MQTT and microcontroller partitioning and binary flashing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

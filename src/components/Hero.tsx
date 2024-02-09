import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[10vh]"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">JESTER!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            I&apos;m an Electronics Engineer that loves to thinker with
            electronics devices and automate them. I started learning
            programming when I was a 10 years old being inspired by Game
            Hacking. Loves computers in general and by hobby learned programming
            through reading books, e-books and videos available on the internet
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/Photons3?tab=repositories", "_blank");
              }}
                className="flex items-center space-x-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[3.5rem] h-[3.5rem] hover:text-yellow-400 transition-all duration-200"
              />
              <p className="text-[20px] font-semibold text-white">
                Github Repository
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/jester.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

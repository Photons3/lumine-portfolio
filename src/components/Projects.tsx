import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb:[1rem]"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[2rem]">
        <div data-aos="fade-up">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Service Scheduling Dashboard
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/servicesched.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            AI Powered Aquaponics System
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/aquaponicssystem.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Cellular Tower Parameters Solver
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/lineofsight.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            AmongUS, Assault Cube and MIR4 Hacktool
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/amongus.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Forecast AI using Tensorflow LSTM
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/LSTM.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            React Mini projects
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src="/images/foodorderapp.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

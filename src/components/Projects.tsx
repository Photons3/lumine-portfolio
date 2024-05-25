import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb:[1rem]"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[2rem]">
        <div data-aos="fade-up">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Stock Watch
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://github.com/Photons3/finance-portfolio-frontend"
              target="_blank"
            >
              <Image
                src="/images/finance-portfolio.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            IoT AI Aquaponics System
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://github.com/Photons3/Aquaponics-System-Dashboard"
              target="_blank"
            >
              <Image
                src="/images/Paquaponicssystem.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Cellular Tower Solver
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://colab.research.google.com/drive/1PFHlUJO1LQGuri7j3C71i8W4HixPPJ4M?usp=sharing"
              target="_blank"
            >
              <Image
                src="/images/Plineofsight.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Among Us Internal Hacktool
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://github.com/Photons3/Among-Us-Internal-Hack--obsolete-"
              target="_blank"
            >
              <Image
                src="/images/Pamongus.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Events Scheduling App
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://github.com/Photons3/Events-Scheduling-React"
              target="_blank"
            >
              <Image
                src="/images/PEvents.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
          <h1 className="text-white capitalize text-[19px] my-auto text-center">
            Food Order App
          </h1>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <a
              href="https://github.com/Photons3/Food-Order-App---React"
              target="_blank"
            >
              <Image
                src="/images/Pfoodorderapp.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

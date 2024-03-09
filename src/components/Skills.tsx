import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div id="skills" className="pt-[4tem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="Electronics Engineer" year="2018-2022">
            Licensed Electronics Engineer, handles accounts such as hospitals
            and clinics around Manila and Southern Luzon. Has an experience in
            quality assurance, troubleshooting and reparing medical equipments.
            Also, in charge of training, demo and installation of different
            medical equipment.
          </SkillsItem>
          <SkillsItem title="Scripting and Automation" year="2020-2023">
            Used Python, Jupiter Notebooks, Linux Virtual Machines and Matlab to
            automate task and to solve problems much more efficiently.
            Experience in creating python scripts that automatically ingest
            spreadsheets using Pandas and iterates possible parameters for
            cellular network towers and outputs solutions to the user.
          </SkillsItem>
          <SkillsLanguage
            skill1="Python"
            skill2="Troubleshooting"
            skill3="Virtual Machines"
            level1="w-[90%]"
            level2="w-[90%]"
            level3="w-[90%]"
          />
        </div>
        <div>
          <SkillsItem title="Web Development" year="2022-2024">
            Has created an IoT interface website using NodeJS as backend,
            handlebars in frontend and MongoDB as a database. Has a knowledge in
            using CRUD and Websocket API in communicating with client the side.
            Has created several React and NextJS app and is on a process of
            creating scheduling system for a company.
          </SkillsItem>
          <SkillsItem title="Microcontoller and App Analysis" year="2021-2023">
            Has built different microcontroller projects using Arduino and ESP32
            microcontroller. Has an experience in MQTT, Tensorflow in
            Microcontroller, C/C++, Python, IoT and Microcontroller Development.
            Experience in OpenGL and DirectX hooking, C++ memory manipulations,
            debugging and decompiling softwares.
          </SkillsItem>
          <SkillsLanguage
            skill1="React JS"
            skill2="App Debugging"
            skill3="C/C++"
            level1="w-[90%]"
            level2="w-[90%]"
            level3="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

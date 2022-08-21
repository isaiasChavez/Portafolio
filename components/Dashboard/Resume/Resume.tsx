import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from './resume.module.css'
import { useRouter } from "next/router";
import { routes } from "../../../routes";
import ResumeCard from "./ResumeCard";
const Resume = () => {
  return (
    <div className="  w-full py-8 ">
      <div className="h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10">
        <h2 className="text-center text-2xl mb-8 md:mb-4 ">Experience</h2>
        <span className="flex items-center ">
          ----
          <FontAwesomeIcon
            className="mx-4 w-8 h-8 text-secondary text-2xl mx-4"
            icon={faGraduationCap}
          />
          ----
        </span>
      </div>
      <div className="h-5/6 w-full flex flex-wrap px-2 md:px-20 mt-8 md:mt-4">
        <ResumeCard
          link={routes.companies.icalia.name}
          title="IcaliaLabs"
          charge="Software Enginner"
          description="I learn how to work with a team from America. I worked as a React Native developer
          , frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
        />
        <ResumeCard
        link={`${routes.companies.inmersys.name}`}
          title="Inmersys"
          charge="Web, movile and AR/VR developer"
          description="At this time, I learn a lot of stuff about many areas of web development. I worked with servers, backend, frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
        
        />
        <ResumeCard
          title="Technological University of the Mixteca"
          charge="Computer Engineering"
          description="During this time I worked with technologies such as PostgreSQL, C, Algorithm Analysis, Data Structures, etc. I made a lot of friends in the area."
          date="2017 - 2022"
        />
      </div>
    </div>
  );
};

export default Resume;



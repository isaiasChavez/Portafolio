import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from './resume.module.css'
import { useRouter } from "next/router";
import { routes } from "../../../routes";
const Resume = () => {
  return (
    <div className="  w-full py-8 ">
      <div className="h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10">
        <h2 className="text-center text-2xl mb-8 md:mb-0">Resume</h2>
        <span className="flex items-center ">
          ----
          <FontAwesomeIcon
            className="mx-4 w-8 h-8 text-secondary text-2xl mx-4"
            icon={faGraduationCap}
          />
          ----
        </span>
      </div>
      <div className="h-5/6 w-full flex flex-wrap px-2 md:px-20">
        <Card
          title="Technological University of the Mixteca"
          charge="Computer Engineering"
          description="During this time I worked with technologies such as PostgreSQL, C, Algorithm Analysis, Data Structures, etc. I made a lot of friends in the area."
          date="2017 - 2022"
        />
        <Card
          title="Inmersys"
          charge="Web, movile and AR/VR developer"
          description="At this time, i learn a lot of things about many areas of web development. I worked with servers, backend, frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
        />
        <Card
          title="IcaliaLabs"
          charge="Software Enginner"
          description="At this time, i learn a lot of things about many areas of web development. I worked with servers, backend, frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
        />
      </div>
    </div>
  );
};

export default Resume;

interface CardProps {
  title: string;
  charge: string;
  description: string;
  date: string;
}

const Card = ({ title, charge, description, date }: CardProps) => {


  const router =  useRouter()

  const redirect = ()=>{
    router.push(routes.company)
  }
  return (
    <div onClick={redirect} className={`${styles.card} w-full    p-8 m-8 md:m-0 md:mb-8 mb-0  text-white  box-border   border-2  border-graycust `}>
      <div className="h-8 font-semibold text-xs md:text-md"> {date}</div>
      <div>
        <div className="font-medium">
          <h3 className="text-secondary text-lg"> {title}</h3>
          <h4 className="text-md"> {charge}</h4>
        </div>
        <hr className="my-5" />
        <div className="text-sm text-graycust">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

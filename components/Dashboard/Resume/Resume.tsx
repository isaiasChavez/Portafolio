import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from './resume.module.css'
import { useRouter } from "next/router";
import { routes } from "../../../routes";
import ResumeCard from "./ResumeCard";
import GeneralContext from "../../../state/general/general.context";
const Resume = () => {
  const context = useContext(GeneralContext)

  return (
    <div
    style={{
      zIndex:-2
    }} 
    className={`w-full  pb-8 bg-darked-900 relative  ${styles.container}`}>
     <div className={styles.inner}>
      <div  className={`${styles.title}  text-secondary bg-darked-900  uppercase font-semibold flex flex-col justify-center items-center md:mb-10`}>
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
      <img
      style={{
        top:`${context? -70 + (context.scrollPercentage*1.3):0}%`,
        transform:` scale(${context? (context.scrollPercentage*1.2):0}%) rotate(180deg)`,
      }}
      className={styles.mariposa} src="/assets/img/mariposa.png"  alt="" />
      <ResumeCard
          background={"/assets/img/icalia/logo.webp"}
          link={routes.companies.icalia.name}
          title="IcaliaLabs"
          charge="Software Enginner"
          description="I learn how to work with a team from America. I worked as a React Native developer
          , frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
          right={true}
        />
        <ResumeCard
          background={"/assets/img/inmer/logo.jpg"}
          link={routes.companies.inmersys.name}
          title="Inmersys"
          charge="FullStack | React Native Developer"
          description="I learn how to work with a team from America. I worked as a React Native developer
          , frontend, apps and a little bit of web VR and Web AR. It was a fun experience and i loved this. It was my first experience."
          date="10/10/2020 - 29/04/2021"
          />
      
      </div> 
      <p className="absolute font-semibold text-xs left-0 bottom-0"><a href="https://www.freepik.es/vector-gratis/polilla-negra-retro-ilustracion-imagenes-predisenadas_11235618.htm#query=svg&position=2&from_view=keyword">Image by pch.vector</a> on Freepik</p>
    </div>
  );
};

export default Resume;



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
    className={`w-full   bg-darked-900 relative  ${styles.container}`}>
     <div className={`${styles.inner}`}>
      <div  className={`${styles.title}  text-secondary bg-darked-900  uppercase font-semibold flex flex-col justify-center items-center  md:mb-10`}>
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
          className="mt-5"
          background={"/assets/img/sofftek/logo.png"}
          link={routes.companies.inmersys.name}
          title="Softtek"
          charge="Software Enginner"
          description="I am working as a part o a big team leadering the development of new funtionalities for importan clients around the world."
          date="01/09/2022 - Actually"
          right={true}
          hiddeButton
          />
      <ResumeCard
          background={"/assets/img/icalia/logo.webp"}
          link={routes.companies.icalia.name}
          title="IcaliaLabs"
          charge="Software Enginner"
          description="I learn how to work with a team from America. I worked as a React Native developer from different clients from america designing new functionalities with complex animations, my greatest hit was to work for an app for J balbin. "
          date="10/03/2022 - 29/09/2022"
          right={false}
        />
        <ResumeCard
          background={"/assets/img/inmer/logo.jpg"}
          link={routes.companies.inmersys.name}
          title="Inmersys"
          charge="FullStack | React Native Developer"
          description="My first Job, the most incredibly company about 3D development, I learned a lot about how to work with differents technologies like Android, IOS, Threejs, and I nedded to learn the best practices to make a clear, standard and commond code for all my team. It was my first experience working with SCRUM."
          date="03/09/2020- 03/10/2021"
          right={true}
          />
       
      </div> 
      <p className="absolute font-semibold text-xs left-0 bottom-0"><a href="https://www.freepik.es/vector-gratis/polilla-negra-retro-ilustracion-imagenes-predisenadas_11235618.htm#query=svg&position=2&from_view=keyword">Image by pch.vector</a> on Freepik</p>
    </div>
  );
};

export default Resume;



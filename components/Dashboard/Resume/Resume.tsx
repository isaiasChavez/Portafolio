import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from './resume.module.css'
import { routes } from "../../../routes";
import ResumeCard from "./ResumeCard";
import GeneralContext from "../../../state/general/general.context";
const Resume = () => {
  const context = useContext(GeneralContext)

  return (
    <div
    className={`w-full   bg-darked-900 relative  ${styles.container}`}>
     <div className={`${styles.inner}`}>
   
      <ResumeCard
          background={"/assets/img/sofftek/logo.png"}
          link={routes.companies.inmersys.name}
          title={context?.language?.softtektitle}
          description={context?.language?.Softteksub}
          date="01/09/2022 - Actually"
          right={true}
          hiddeButton
          triggerClass="softtek-trigger"
          />
      <ResumeCard
          background={"/assets/img/icalia/logo.webp"}
          link={routes.companies.icalia.name}
          title={context?.language?.icaliatitle}
          description={context?.language?.icaliasub}
          date="10/03/2022 - 29/09/2022"
          right={false}
          triggerClass="icalia-trigger"
        />
        <ResumeCard
          background={"/assets/img/inmer/logo.jpg"}
          link={routes.companies.inmersys.name}
          title={context?.language?.inmersystitle}
          description={context?.language?.inmersyssub}
          date="03/09/2020- 03/10/2021"
          right={true}
          triggerClass="inmersys-trigger"
          />
       
      </div> 
    </div>
  );
};

export default Resume;



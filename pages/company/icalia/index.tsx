import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import Head from "next/head";
/**Soy una persona apasionada por la tecnología y el desarrollo de software, y estoy buscando una oportunidad para aplicar mis habilidades y conocimientos en una empresa dinámica y en crecimiento. Tengo una amplia experiencia en el desarrollo de aplicaciones web y móviles, y he trabajado con diferentes lenguajes de programación, como Java, Python y C++. También tengo una sólida comprensión de los principios de diseño de software y las mejores prácticas de desarrollo.

Soy una persona altamente organizada y responsable, y siempre me esfuerzo por mantener altos estándares de calidad en mi trabajo. Me gusta trabajar en equipo y colaborar con otros para alcanzar objetivos comunes. Además, soy muy adaptable y siempre estoy dispuesto a aprender nuevas tecnologías y habilidades para poder ofrecer lo mejor de mí en mi trabajo.

Creo que soy un candidato ideal para una empresa de desarrollo de software en Estados Unidos, ya que tengo las habilidades técnicas necesarias, una actitud positiva y una gran motivación para crecer y desarrollarme en mi carrera. Estoy seguro de que puedo aportar mucho valor a su equipo y contribuir al éxito de la empresa */
const Slide = require("react-reveal/Slide");
const Fade = require("react-reveal/Fade");

import styles from "./styles.module.css";
import ImageViewer, { ImageViewerRef } from "../../../components/ImageViewer";
import { useContext, useEffect, useRef, useState } from "react";
import LayoutEmpty from "../../../components/shared/layout/empty";
import NavBar from "../../../components/NavBar";
import GeneralContext from "../../../state/general/general.context";

interface CompanyProps {}

const Icalia: React.FC<CompanyProps> = () => {
  const component = useRef<ImageViewerRef>();
  const images = [
    "/assets/img/icalia/equipo2.png",
    "/assets/img/icalia/teammexico.jpeg",
    "/assets/img/icalia/teamusa.jpeg",
  ];

  const context = useContext(GeneralContext);

  return (
    <>
      <Head>
        <title>IcaliaLabs | Isaías Chávez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ImageViewer
        ref={component}
        images={images}
        imageSelected="/assets/img/icalia/teamusa.jpeg"
      />
      <LayoutEmpty fade className="pb-32">
        <div className={`w-full  ${styles.header} `}>
          <div className={`${styles.title}`}>
            <div className={styles.titleInter}>
              <img
                className={`${styles.logo} mb-8 `}
                src="/assets/img/icalia/logo.jpg"
                alt=""
              />
              <div className="">
                <h3 className="text-4xl md:text-5xl lg:text-5xl m-0 text-secondary ">
                  {" "}
                  <a
                    href="https://www.icalialabs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IcaliaLabs
                  </a>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.container}`}>
          <div className="mb-8 flex">
            <h3 className="font-semibold"> {context?.language?.duration} </h3>
            <span className="ml-3 text-graycust">
              {context?.language?.months5}
            </span>
          </div>

          <div>
            <h3 className="mb-6 font-semibold">
              {context?.language?.projects}
            </h3>
          </div>

          <div className={`${styles.projectsContainer} pb-10`}>
            <Slide left>
              <ProjectRow
                stack="ReactJS, Nextjs, Firebase Cloud Functions, Stripe, Google Analytics, GTM, Nodejs, Typescript"
                codeLink=""
                linkSite="https://www.virtualterms.com/"
                title="virtualterms.com"
                subject={context?.language?.itwasan}
                link={routes.companies.icalia.projects.virtualterms}
              />
              <ProjectRow
                stack="ReactJs, Google Tag Manager, Nodejs, Google Analytics"
                codeLink=""
                linkSite="https://www.rockefellercenter.com/"
                title="rockefellercenter.com"
                subject={context?.language?.rockefeller}
                link={routes.companies.icalia.projects.rockefeller}
              />
              <ProjectRow
                stack="React Native"
                linkSite=""
                title="OyeApp"
                subject={
                  <>
                    {context?.language?.oye1}{" "}
                    <a
                      target="_blank"
                      href="https://bighuman.com/"
                      rel="noreferrer"
                      className="text-secondary underline"
                    >
                      {context?.language?.bighuman}
                    </a>
                    {context?.language?.oye2}
                  </>
                }
                link={routes.companies.icalia.projects.oyeapp}
              />
            </Slide>
          </div>
          <div className={`${styles.imagesContainer}`}>
            <div className={styles.imagesItem}>
              <Fade>
                <img
                  onClick={() =>
                    component.current?.open("/assets/img/icalia/equipo2.png")
                  }
                  className={`${styles.image} selectable click-images`}
                  src="/assets/img/icalia/equipo2.png"
                  alt=""
                />
              </Fade>
            </div>

            <div className={styles.imagesItem}>
              <Fade>
                <img
                  className={`${styles.image} selectable click-images `}
                  onClick={() =>
                    component.current?.open("/assets/img/icalia/teamusa.jpeg")
                  }
                  src="/assets/img/icalia/teamusa.jpeg"
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </div>
      </LayoutEmpty>
    </>
  );
};

export default Icalia;

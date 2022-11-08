import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import Head from 'next/head'

const Slide = require("react-reveal/Slide");
const Fade = require("react-reveal/Fade");

import styles from "./styles.module.css";
import ImageViewer, { ImageViewerRef } from "../../../components/ImageViewer";
import { useContext, useRef } from "react";
import LayoutEmpty from "../../../components/shared/layout/empty";
import NavBar from "../../../components/NavBar";
import GeneralContext from "../../../state/general/general.context";

interface CompanyProps {}

const Icalia: React.FC<CompanyProps> = () => {
  const component = useRef<ImageViewerRef>();
  console.log({ component });

  const images = [
    "/assets/img/icalia/equipo2.png",
    "/assets/img/icalia/teammexico.jpeg",
    "/assets/img/icalia/teamusa.jpeg",
  ];

  const context = useContext(GeneralContext)

  return (
    <>
      <Head>
        <title>IcaliaLabs | Isaías Chávez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar/>
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
            <span className="ml-3 text-graycust">5 months</span>
          </div>

          <div>
            <h3 className="mb-6 font-semibold">Projects:</h3>
          </div>

          <div className={`${styles.projectsContainer} pb-10`}>
            <Slide left>
              <ProjectRow
                stack="ReactJS, Nextjs, Firebase Cloud Functions, Stripe, Google Analytics, GTM, Nodejs, Typescript"
                codeLink=""
                linkSite="https://www.virtualterms.com/"
                title="virtualterms.com"
                subject="
              It was a website where you can sign virtual contracts with virtual signs, Pear to Pear, the project needed maintain fixing bugs and adding new functionalities, it was a client from america and I had direct contact to him to give the requirements and talk about the project status, It was only me."
                link={routes.companies.icalia.projects.virtualterms}
              />
              <ProjectRow
                stack=""
                codeLink=""
                linkSite="https://www.rockefellercenter.com/"
                title="rockefellercenter.com"
                subject="
              My second project, I was part of a team as a Frontend developer, my tasks were about implement analytics to track the user behavior and also to create a sistem to compare tickets and the booking system."
                link={routes.companies.icalia.projects.rockefeller}
              />
              <ProjectRow
                stack=""
                linkSite=""
                title="OyeApp"
                subject={
                  <>
                    Proyecto en el cual trabajé como desarrollador React Native
                    y como agregado al equipo de una empresa de América:{" "}
                    <a
                      target="_blank"
                      href="https://bighuman.com/"
                      rel="noreferrer"
                      className="text-secondary underline"
                    >
                      {" "}
                      BigHuman
                    </a>
                    , realizando tareas de Frontend maquetando pantallas y
                    dirigiendo la lógica, aprendí a maquetar animaciones
                    complejas con la ayuda de la Api de Animate de React Native
                    además aprendí a trabajar con un equipo completo de TI en
                    América. Comunicando me con el equipo y con la lider de
                    proyecto, aprendí a trabajar con CI/CD y equipos mucho más
                    estructurados y con altos estándares de código. Aprendí
                    mucho sobre animaciones en React native. Redux, React Query
                    etc.
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

import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import Head from "next/head";

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

  const images = ["/assets/img/inmer/inmer.jpeg"];

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
                src="/assets/img/inmer/logo.jpg"
                alt=""
              />
              <div className="">
                <h3 className="text-4xl md:text-5xl lg:text-5xl m-0 text-secondary ">
                  {" "}
                  <a
                    href="https://www.inmersys.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inmersys
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
              {context?.language?.onethre}
            </span>
          </div>

          <div>
            <h3 className="mb-6 font-semibold">Projects:</h3>
          </div>

          <div className={`${styles.projectsContainer} pb-10`}>
            <Slide left>
              <ProjectRow
                stack="ReactJS, React Native, NestJS, Typeorm, "
                title="Bioderma"
                subject={context?.language?.bioderma}
                link={routes.companies.inmersys.projects.voz}
                linkSite="https://play.google.com/store/apps/details?id=com.inmersys.bioderma&hl=es_MX"
              />
              <ProjectRow
                stack="ReactJS, React Native, NestJS, Typeorm, PostgresSQL, Firebase "
                title="Bioderma (APP)"
                subject={context?.language?.biodermaapp}
                link={routes.companies.inmersys.projects.voz}
                linkSite="https://play.google.com/store/apps/details?id=com.inmersys.bioderma&hl=es_MX"
              />
              <ProjectRow
                stack=" Stripe, Nodejs, Nestjs, Typescript, Ant Design, TailwindCSS, LetsEncrypt, Nextjs, TypeORM"
                title="Ocupath"
                codeLink="https://github.com/isaiasChavez/ocupath"
                linkSite="https://ocupath.vercel.app/"
                subject={context?.language?.ocupath}
                link={routes.companies.inmersys.projects.voz}
              />
              <ProjectRow
                stack="PostgresSQL, NestJS, Nodejs, CSS, TailwindCSS"
                title="Consorcio: Modelo de Prevención de Delitos"
                subject={context?.language?.consorcio}
                link={routes.companies.inmersys.projects.voz}
                linkSite="https://consorcio.bcnschool.net/"
              />
              <ProjectRow
                title="Simulador Lis"
                stack="NextJS, Anime.js, CSS, Js"
                linkSite="https://simulador-lis.com/"
                subject={<>{context?.language?.simulador}</>}
                link={routes.companies.inmersys.projects.voz}
              />
              <ProjectRow
                stack="Vuejs, JS, TailwindCSS, Firebase, Google Analytics, Firebase Hosting, StyledComponents, Typescript"
                title="Nike Voz Hermana"
                subject={context?.language?.nikevoz}
                link={routes.companies.inmersys.projects.voz}
                linkSite="https://instyle.mx/estilo-de-vida/nike-voz-hermana/"
              />
              <ProjectRow
                stack="VueJs, StyledComponents, Nuxt, ReactJs, Nodejs, MongoDB"
                title="Juguetilandia"
                subject={context?.language?.juguetilandia}
                link={routes.companies.inmersys.projects.voz}
              />
              <ProjectRow
                stack="Nodejs, TailwindCSS, MongoDB, Digital Ocean"
                title="Scaperooms"
                linkSite="https://scaperooms.netlify.app/login"
                subject={context?.language?.scaperooms}
                link={routes.companies.inmersys.projects.voz}
              />
            </Slide>
          </div>
          <div className={`${styles.imagesContainer}`}>
            <div className={styles.imagesItem}>
              <Fade>
                <img
                  onClick={() =>
                    component.current?.open("/assets/img/inmer/inmer.jpeg")
                  }
                  className={`${styles.image} selectable click-images`}
                  src="/assets/img/inmer/inmer.jpeg"
                  alt=""
                />
              </Fade>
            </div>

            <div className={styles.imagesItem}>
              <Fade>
                <video
                  className="bg-black w-full h-full"
                  src="/assets/img/inmer/inmervideo.mp4"
                  poster="posterimage.jpg"
                  controls
                >
                  Tu navegador no admite el elemento <code>video</code>.
                </video>
              </Fade>
            </div>
          </div>
        </div>
      </LayoutEmpty>
    </>
  );
};

export default Icalia;

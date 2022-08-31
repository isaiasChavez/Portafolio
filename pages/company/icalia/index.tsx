import Layout from "../../../components/shared/layout";
import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
const Slide  = require("react-reveal/Slide");

import styles from "./styles.module.css";
import ImageViewer, {
  ImageViewerRef,
} from "../../../components/ImageViewer";
import { useRef } from "react";
import LayoutEmpty from "../../../components/shared/layout/empty";

interface CompanyProps {}

const Icalia: React.FC<CompanyProps> = () => {
  const component = useRef<ImageViewerRef>();
  console.log({ component });

  const images = [
    "/assets/img/icalia/equipo2.png",
    "/assets/img/icalia/teammexico.jpeg",
    "/assets/img/icalia/teamusa.jpeg",
  ];

  return (
    <>
      <ImageViewer
        ref={component}
        images={images}
        imageSelected="/assets/img/icalia/teamusa.jpeg"
      />
      <LayoutEmpty fade className="pb-32">
        <div className={`${styles.container}`}>

        <div className={`w-full min-h-fit flex items-start md:items-center py-10  flex-col md:flex-row `}>
          <img
            className={`${styles.logo} mb-8`}
            src="/assets/img/icalia/logo.jpg"
            alt=""
            />
          <h3 className="text-6xl m-0 text-secondary">
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
        <div className="mb-8 flex">
          <h3 className="font-semibold">Tiempo de trabajo:</h3>
          <span className="ml-3 text-graycust">5 meses</span>
        </div>

        <div>
          <h3 className="mb-6 font-semibold">Proyectos:</h3>
        </div>

        <div className={`${styles.projectsContainer} pb-10`}>
        <Slide left >

        
          <ProjectRow
            stack="ReactJS, Nextjs, Firebase Cloud Functions, Stripe, Google Analytics, GTM, Nodejs, Typescript"
            codeLink=""
            linkSite="https://www.virtualterms.com/"
            title="virtualterms.com"
            subject="Sitio Web para la firma de contratos Pear To Pear, el sitio web requirió de mucho mantenimiento solucionando bugs y agregando nuevas funcionalidades, cliente de América con el cual tenía contacto directo para obtención de requerimientos y charlas sobre el proyecto."
            link={routes.companies.icalia.projects.virtualterms}
          />
          <ProjectRow
            stack=""
            codeLink=""
            linkSite="https://www.rockefellercenter.com/"
            title="rockefellercenter.com"
            subject="Segundo Proyecto en el cual trabajé a la par de un equipo de desarrollo como Frontend, me dediqué a tareas de lógica implementando analíticas para detectar el comportamiento detallado del usuario además de crear un sistema para comparación de tickets y sistema de reservas. "
            link={routes.companies.icalia.projects.rockefeller}
            />
          <ProjectRow
            stack=""
            linkSite=""
            title="OyeApp"
            subject={
              <>
                Proyecto en el cual trabajé como desarrollador React Native y
                como agregado al equipo de una empresa de América:{" "}
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
                dirigiendo la lógica, aprendí a maquetar animaciones complejas
                con la ayuda de la Api de Animate de React Native además aprendí
                a trabajar con un equipo completo de TI en América. Comunicando
                me con el equipo y con la lider de proyecto, aprendí a trabajar
                con CI/CD y equipos mucho más estructurados y con altos
                estándares de código. Aprendí mucho sobre animaciones en React
                native. Redux, React Query etc.
              </>
            }
            link={routes.companies.icalia.projects.oyeapp}
          />
          </Slide>
        </div>
        <div className={`${styles.imagesContainer}`}>
          <div className={styles.imagesItem}>
            <img
              onClick={() =>
                component.current?.open("/assets/img/icalia/equipo2.png")
              }
              className={`${styles.image} selectable`}
              src="/assets/img/icalia/equipo2.png"
              alt=""
              />
          </div>
          <div className={styles.imagesItem}>
            <img
              className={`${styles.image} selectable`}
              onClick={() =>
                component.current?.open("/assets/img/icalia/teammexico.jpeg")
              }
              src="/assets/img/icalia/teammexico.jpeg"
              alt=""
              />
          </div>
          <div className={styles.imagesItem}>
            <img
              className={`${styles.image} selectable`}
              onClick={() =>
                component.current?.open("/assets/img/icalia/teamusa.jpeg")
              }
              src="/assets/img/icalia/teamusa.jpeg"
              alt=""
              />
          </div>
        </div>
              </div>
      </LayoutEmpty>
    </>
  );
};

export default Icalia;

import { useRef } from "react";
import ImageViewer, { ImageViewerRef } from "../../../components/ImageViewer";
import LayoutEmpty from "../../../components/shared/layout/empty";
import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import styles from "./styles.module.css";

interface CompanyProps {}

const Inmersys: React.FC<CompanyProps> = () => {
  const images = [
    "/assets/img/inmer/inmer.jpeg",
  ];

  const viewer = useRef<ImageViewerRef>();

  return (
    <>
      <ImageViewer
        ref={viewer}
        images={images}
        imageSelected="/assets/img/icalia/teamusa.jpeg"
      />
      <LayoutEmpty fade className="px-4 md:px-16 pt-5 pb-10">
        <div className="text-lg">
          <div className="w-full min-h-fit flex items-start md:items-center py-10  flex-col md:flex-row">
            <img
              className={`${styles.logo} mb-8`}
              src="/assets/img/inmer/logo.jpg"
              alt=""
            />
            <h3 className="text-6xl m-0 text-secondary">
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
          <div className="mb-8 flex">
            <h3 className="font-semibold">Duration:</h3>
            <span className="ml-3 text-graycust">1 year and 3 months</span>
          </div>

          <div>
            <h3 className="mb-6 font-semibold">Projects:</h3>
          </div>
        </div>
        <div className="mb-10">
          <ProjectRow
            stack="ReactJS, React Native, NestJS, Typeorm, "
            title="Bioderma"
            subject="Fue el proyecto de mayor alcance en el que estuve, se trataba de un CMS creado en React junto a un servidor hecho con NestJS y typescript con el cual aprendí a moverme en la tecnología. Dentro del sistema realicé la implementación de una tienda en linea "
            link={routes.companies.inmersys.projects.voz}
            linkSite="https://play.google.com/store/apps/details?id=com.inmersys.bioderma&hl=es_MX"
          />
          <ProjectRow
            stack="ReactJS, React Native, NestJS, Typeorm, PostgresSQL, Firebase "
            title="Bioderma (APP)"
            subject="Realicé la migración de la app completa hacia la nueva versión de React Native (0.6 en adelante), además de integrar nuevas funcionalidades como tienda en linea y Quizts, se utilizaron nuevas tecnologías como React Router y frameworks de UI como RN Elements, además aprendí a trabajar con PushNotifications, traking del comportamiento del usuario. Mantuve este proyecto durante toda mi estancia en la empresa dando mantenimiento y agregando nuevos features.  "
            link={routes.companies.inmersys.projects.voz}
            linkSite="https://play.google.com/store/apps/details?id=com.inmersys.bioderma&hl=es_MX"
          />
          <ProjectRow
            stack=" Stripe, Nodejs, Nestjs, Typescript, Ant Design, TailwindCSS, LetsEncrypt, Nextjs, TypeORM"
            title="Ocupath"
            codeLink="https://github.com/isaiasChavez/ocupath"
            linkSite="https://ocupath.vercel.app/"
            subject="Último proyecto que realicé para la empresa, consistía en un software para gestionar usuarios que accederían a una plataforma de realidad virtual hecha en Unity, el sistema debía gestionar usuarios por medio de suscripciones que tenían que ser pagadas, fue mi última incursión en pagos en linea con stripe, el software gestionaba contenido que sería desplegado en la aplicación de realidad virtual a manera de presentaciones por lo que trabajé con AWS para gestionar esos contenidos además de gestionar el envío de correos. También aprendí a Maquetar correos"
            link={routes.companies.inmersys.projects.voz}
          />
          <ProjectRow
            stack="PostgresSQL, NestJS, Nodejs, CSS, TailwindCSS"
            title="Consorcio: Modelo de Prevención de Delitos"
            subject="Plataforma con la que se buscaba convertir y crear un curso interactivo para mostrar a los empleados de la empresa consorcio los diversos delitos en los que podrían incurrir, se desarrolló durante un largo tiempo y tuve pláticas directas de los clientes para abordar los requerimientos y diseñar la arquitectura. Fue un proyecto donde aprendí a trabajar muy bien con animaciones en CSS."
            link={routes.companies.inmersys.projects.voz}
            linkSite="https://consorcio.bcnschool.net/"
          />
          <ProjectRow
            title="Simulador Lis"
            stack="NextJS, Anime.js, CSS, Js"
            linkSite="https://simulador-lis.com/"
            subject={
              <>
                Proyecto para una empresa de salud, se quería presentar un nuevo
                producto por lo cual se diseño una página a manera de
                presentación, contenía varios pasos y animaciones con{" "}
                <a
                  className="text-secondary underline"
                  href="https://threejs.org/"
                >
                  Threejs
                </a>
                , para representar la aplicación del producto. El sitio fue
                enteramente estático y representó un reto para diseñar cada una
                de las animaciones
              </>
            }
            link={routes.companies.inmersys.projects.voz}
          />
          <ProjectRow
            stack="Vuejs, JS, TailwindCSS, Firebase, Google Analytics, Firebase Hosting, StyledComponents, Typescript"
            title="Nike Voz Hermana"
            subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana', fue un proyecto en colaboración con otra empresa tercerizadora."
            link={routes.companies.inmersys.projects.voz}
            linkSite="https://instyle.mx/estilo-de-vida/nike-voz-hermana/"
          />
          <ProjectRow
            stack=""
            title="Festival Nike juegamas"
            subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
            link={routes.companies.inmersys.projects.voz}
            linkSite="https://festivalnikejuegamas.com/after"
          />
          <ProjectRow
            stack="VueJs, StyledComponents, Nuxt, ReactJs, Nodejs, MongoDB"
            title="Juguetilandia"
            subject="Proyecto realizado para Walmart en el cual se creó un CMS para gestionar el contenido que después sería utilizado para mostrarlo en otro sitio para usuarios jóvenes. El sitio principal tenía una sección de juegos realizados en Threejs y una tienda en linea donde podrían observar los productos promocionados por la empresa. Además contaba con una zona de streaming de los eventos programados para la ocasión."
            link={routes.companies.inmersys.projects.voz}
          />
          <ProjectRow
            stack="ReactJS, Vuejs, NestJS, Nodejs, MongoDB, Typescript, Threejs, MaterialDesign, Digital Ocean"
            linkSite="https://expobebe.netlify.app/"
            title="Expo Bebé"
            subject={
              <>
                Proyecto basado con el proyecto pasado Juguetilandia, se
                cambiaron las escenas 3D y en este proyecto me tocó trabajar por
                primera vez con las tecnologías 3D,{" "}
                <a
                  className="text-secondary underline"
                  href="https://threejs.org/"
                >
                  Threejs
                </a>
                , se realizaron cambios en el CMS y se readaptó el proyecto
                pasado.
              </>
            }
            link={routes.companies.inmersys.projects.voz}
          />
          <ProjectRow
            stack="Nodejs, TailwindCSS, MongoDB, Digital Ocean"
            title="Scaperooms"
            linkSite="https://scaperooms.netlify.app/login"
            subject="Plataforma que hospedaría proyectos realizados en Unity con UnityWebGL, el sistema contaba con registros y manejo de usuarios entre los diversos juegos y actividades realizadas por los desarrolladores Unity, se gestionaban sesiones con moderadores, se enviaban invitaciones por correo electrónico y se manejaban diversos roles como usuario, moderador y gerente con un panel de administración para el rol más alto. El proyecto tuvo una duración de 3 meses y por supuesto tuvo su parte de Backend para gestionar todo. "
            link={routes.companies.inmersys.projects.voz}
          />
        </div>
        <div className={`${styles.imagesContainer}`}>
          <div className={styles.imagesItem}>
            <img
              onClick={() =>
                viewer.current?.open("/assets/img/inmer/inmer.jpeg")
              }
              className={`${styles.image} selectable`}
              src="/assets/img/inmer/inmer.jpeg"
              alt=""
            />
          </div>
          <div className={styles.imagesItem}>
            <video
              className="bg-black w-full h-full"
              src="/assets/img/inmer/inmervideo.mp4"
              poster="posterimage.jpg"
              controls
            >
              Tu navegador no admite el elemento <code>video</code>.
            </video>
          </div>
         
        </div>
      </LayoutEmpty>
    </>
  );
};

export default Inmersys;

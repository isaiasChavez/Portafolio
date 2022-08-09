import Image from "next/image";
import Layout from "../../components/shared/layout";
import { Phrases } from "../../config/language";
import styles from "./styles.module.css";
interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Layout flex>
      <div className={` w-6/12   flex justify-center items-center`}>
        <div className={`${styles.pictureContainer}`}>
          <div className={`${styles.pictureContainerWrapper}`}>
            <div className={` ${styles.pictureSquare} `}>
            <img src="/assets/img/voz-hermana/v1.webp" alt="" className="w-full h-full" />
            </div>
            <div className={` ${styles.pictureSquare} `}>
              <img src="/assets/img/voz-hermana/v2.png" alt="" className="w-full h-full" />
            </div>
            <div className={` ${styles.pictureSquare} `}>

            <img src="/assets/img/voz-hermana/v3.png" alt="" className="w-full h-full" />
            </div>
            <div className={` ${styles.pictureSquare} `}>
              <img src="/assets/img/voz-hermana/v4.png" alt="" className="w-full h-full" />

            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 h-full bg-primary pt-8">
        <div className=" w-full   flex items-center mb-16 mt-4 ">
          <h2 className="font-bold text-white text-5xl  "> Voz Hermana</h2>
        </div>

        <div className=" w-full   flex items-center">
          <div className={`${styles.subtitle}`}></div>
          <h3 className="font-bold text-white text-lg  ">{Phrases.aboutTheProject}</h3>
        </div>
        <div className="px-4 font-thin py-8">
          <p className="text-graycust">
          Se solicitó generar una plataforma que hospedara el streaming que se realizaría referente al mes de la mujer con el proyecto “Nike Voz Hermana”, en donde participarían artistas como Mon Lafert, entre otras. Además de transmitir el streaming en vivo, se creó una plataforma desde donde los visitantes podían seguir la transmisión, fuera de un canal convencional de youtube en vivo.
          </p>
        </div>
        <div className=" w-full   flex items-center">
          <div className={`${styles.subtitle}`}></div>
          <h3 className="font-bold text-white text-lg">{Phrases.responsabilities}</h3>
        </div>
        <div className="px-4 font-thin py-8">
          <p className="text-graycust">
            Trabajé como único desarrollador haciendo de full-stack. El proyecto fue escrito con Vuejs y con un backend en firebase debido a la naturaleza efímera del proyecto. 
          </p>
        </div>
        <div className=" w-full   flex items-center">
          <div className={`${styles.subtitle}`}></div>
          <h3 className="font-bold text-white text-lg ">{Phrases.techLearned}</h3>
        </div>
        <div className="px-4 font-thin py-8">
          <p className="text-graycust">
            Con este proyecto fue mi primer incursión profesional utilizando Vuejs con Vuex, además fortalecí mis conocimientos en Firebase, para los estilos utilicé <b>Tailwind css</b> junto con <b>styled components</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Project;

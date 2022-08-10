import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/shared/layout";
import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";

interface CompanyProps {}

const Inmersys: React.FC<CompanyProps> = () => {
  return (
    <Layout padding="0 3rem">
      <div className="w-full flex  flex-wrap md:flex-nowrap pt-8 ">
        <div
          className=" h-44 md:h-72 w-full md:w-6/12 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/img/inmer/inmersys.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="h-44 md:h-72 w-full mt-4 md:mt-0 md:w-6/12 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/img/icalia/teammexico.jpeg')",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        ></div>
      </div>
      <div className="w-full h-32 flex items-center">
        <h3 className="text-6xl m-0 text-secondary"> <a href="https://www.inmersys.com/" target="_blank" rel="noreferrer">Inmersys</a> </h3>
      </div>
      <div className="mb-8 flex">
        <h3 className="font-semibold">
          Tiempo de trabajo: 
        </h3>
        <span className="ml-3 text-graycust">1 año y 3 meses</span>
      </div>
      <div className="mb-6">
        <h3 className="mb-6 font-semibold">Responsabilidades:</h3>
        <ul className="list-disc text-graycust">
          <li>
            Dí mantenimiento a aplicaciones, cree muchas más desde cero haciendo
            la parte del Cliente y el servidor, además del despliegue y
            mantenimiento.
          </li>
          <li>Aprendí a trabajar en equipo con metodologías ágiles.</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 font-semibold">Proyectos:</h3>
      </div>
      <div className="">
        <ProjectRow
          title="Nike Voz Hermana"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
          linkExtern="https://instyle.mx/estilo-de-vida/nike-voz-hermana/"
        />
        <ProjectRow
          title="Juguetilandia"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
        />
        <ProjectRow
        linkExtern="https://expobebe.netlify.app/"
          title="Expo Bebé"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
        />
         <ProjectRow
          title="Scaperooms"
          linkExtern="https://scaperooms.netlify.app/login"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
        />
        <ProjectRow
          title="Ocupath"
          linkExtern="https://ocupath.vercel.app/"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
        />
        <ProjectRow
          title="Consorcio: Modelo de Prevención de Delitos"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
          linkExtern="https://consorcio.bcnschool.net/"
        />
        <ProjectRow
          title="Bioderma"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
          linkExtern="https://play.google.com/store/apps/details?id=com.inmersys.bioderma&hl=es_MX"
        />
        <ProjectRow
          title="Simulador Lis"
          linkExtern="https://simulador-lis.com/"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
        />
        <ProjectRow
          title="Festival Nike juegamas"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.inmersys.projects.voz}
          linkExtern="https://festivalnikejuegamas.com/after"
        />
        
      </div>
    </Layout>
  );
};

export default Inmersys;

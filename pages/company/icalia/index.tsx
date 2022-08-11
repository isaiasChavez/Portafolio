import Layout from "../../../components/shared/layout";
import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import styles from "./styles.module.css";
interface CompanyProps {}

const Icalia: React.FC<CompanyProps> = () => {
  return (
    <Layout padding="0 3rem">
      <div className="w-full flex  flex-wrap md:flex-nowrap pt-8 ">
      <div
          className=" h-44 md:h-72 w-full md:w-6/12 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/img/icalia/teamusa.jpeg')",
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
        <h3 className="text-6xl m-0 text-secondary"> <a href="https://www.icalialabs.com/" target="_blank" rel="noreferrer">IcaliaLabs</a> </h3>
      </div>
      <div className="mb-8 flex">
        <h3 className="font-semibold">
          Tiempo de trabajo: 
        </h3>
        <span className="ml-3 text-graycust">5 meses</span>
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

      <div className={`${styles.projectsContainer}`}>
        <ProjectRow
          title="OyeApp"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.icalia.projects.oyeapp}
        />
        <ProjectRow
          title="Virtual Terms"
          subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
          link={routes.companies.icalia.projects.oyeapp}
        />
      </div>
    </Layout>
  );
};

export default Icalia;

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
      <div className="w-full mt-6 md:mt-2 h-20 md:h-32 flex items-center">
        <h3 className="text-4xl md:text-6xl text-secondary">Icalia Labs</h3>
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

import Layout from "../../../components/shared/layout";
import ProjectRow from "../../../components/shared/ProyectRow";
import { routes } from "../../../routes";
import styles from "./styles.module.css";
interface CompanyProps {}

const Icalia: React.FC<CompanyProps> = () => {
  return (
    <Layout className="px-6 md:px-16">
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

      <div className={`${styles.projectsContainer}`}>
        <ProjectRow
          stack="ReactJS, Nextjs, Firebase Cloud Functions, Stripe, Google Analytics, GTM, Nodejs, Typescript"
          codeLink=""
          linkSite="https://www.virtualterms.com/"
          title="virtualterms.com"
          subject="Sitio Web para la firma de contratos Pear To Pear, el sitio web requirió de mucho mantenimiento solucionando bugs y agregando nuevas funcionalidades, cliente de América con el cual tenía contacto directo para obtención de requerimientos y charlas sobre el proyecto."
          link={routes.companies.icalia.projects.oyeapp}
        />
        <ProjectRow
          stack=""
          codeLink=""
          linkSite="www.rockefellercenter.com"
          title="rockefellercenter.com"
          subject="Segundo Proyecto en el cual trabajé a la par de un equipo de desarrollo como Frontend, me dediqué a tareas de lógica implementando analíticas para detectar el comportamiento detallado del usuario además de crear un sistema para comparación de tickets y sistema de reservas. "
          link={routes.companies.icalia.projects.oyeapp}
        />
        <ProjectRow
          stack=""
          linkSite=""
          title="OyeApp"
          subject={<>Proyecto en el cual trabajé como desarrollador React Native y como agregado al equipo de una empresa de América: <a target="_blank"  href="https://bighuman.com/" rel="noreferrer" className="text-secondary underline"> BigHuman</a>, realizando tareas de Frontend maquetando pantallas y dirigiendo la lógica, aprendí a maquetar animaciones complejas con la ayuda de la Api de Animate de React Native además aprendí a trabajar con un equipo completo de TI en América. Comunicando me con el equipo y con la lider de proyecto, aprendí a trabajar con CI/CD y equipos mucho más estructurados y con altos estándares de código. Aprendí mucho sobre animaciones en React native. Redux, React Query etc.</>}
          link={routes.companies.icalia.projects.oyeapp}
        />
      </div>
    </Layout>
  );
};

export default Icalia;

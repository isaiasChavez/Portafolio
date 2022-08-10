import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/shared/layout";
import ProjectRow from "../../components/shared/ProyectRow";
import { routes } from "../../routes";

interface CompanyProps {}

const Inmersys: React.FC<CompanyProps> = () => {
  return (
    <Layout padding="0 3rem">
      <div className="w-full h-32 flex items-center">
        <h3 className="text-6xl text-secondary">Inmersys</h3>
      </div>
      <div className="">
        <ProjectRow title="voz hermana"
        subject="Plataforma que hospedó el streaming que se realizó referente al mes de la mujer con el proyecto 'Nike Voz hermana'"
        link={routes.companies.inmersys.projects.voz} />
      </div>
    </Layout>
  );
};


export default Inmersys;

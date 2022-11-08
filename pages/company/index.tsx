import { useRouter } from "next/router";
import Layout from "../../components/shared/layout";
import { routes } from "../../routes";

interface CompanyProps {}

const Company: React.FC<CompanyProps> = () => {
  return (
    <Layout padding="0 3rem">
      <div className="w-full h-32 flex items-center">
        <h3 className="text-6xl text-secondary">Inmersys</h3>
      </div>
      <div className="">
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
      </div>
    </Layout>
  );
};

interface ProjectRowProps {}

const ProjectRow: React.FC<ProjectRowProps> = () => {


  const router =  useRouter()

  const redirect = ()=>{
    router.push(routes.project)
  }

  return (
      <div onClick={redirect} className="w-full  rounded-sm shadow-lg  cursor-pointer my-4 p-4 ">
        <h3 className="py-1  text-secondary">Proyecto Adidas</h3>
        <p className="text-graycust">
          Lorem ipsum, dolor sit amet iure nostrum exercitationem ducimus
          consequuntur, illo quam libero ullam eligendi?
        </p>
      </div>
  );
};

export default Company;

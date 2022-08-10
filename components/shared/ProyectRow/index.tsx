import { useRouter } from "next/router";
import { ProjectRowProps } from "../../../types/shared/ProjectRow";


const ProjectRow: React.FC<ProjectRowProps> = ({link,title,subject}) => {


    const router =  useRouter()
  
    const redirect = ()=>{
      if (link) { 
        router.push(link)
      }
    }
  
    return (
        <div onClick={redirect} className="w-full  rounded-sm shadow-lg  cursor-pointer my-4 p-4 ">
          <h3 className="py-1  text-secondary">{title}</h3>
          <p className="text-graycust">
           {subject}
          </p>
        </div>
    );
  };

export default ProjectRow
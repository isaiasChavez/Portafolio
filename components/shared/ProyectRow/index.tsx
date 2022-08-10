import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ProjectRowProps } from "../../../types/shared/ProjectRow";

import { faLink } from "@fortawesome/free-solid-svg-icons";
const ProjectRow: React.FC<ProjectRowProps> = ({ link, title, subject,linkExtern }) => {
  const router = useRouter();

  const redirect = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="w-full  rounded-sm shadow-lg  my-4 p-4 flex items-center">
      <div>
        <h3 onClick={redirect} className="py-1 cursor-pointer text-secondary">
          {title}
        </h3>
        <p className="text-graycust">{subject}</p>
      </div>
      { linkExtern &&<a href={linkExtern} target="_blank" rel="noreferrer">

      <FontAwesomeIcon
        className="w-6 h-6 text-secondary text-2xl mx-4 "
        icon={faLink}
        />
        </a>}
    </div>
  );
};

export default ProjectRow;

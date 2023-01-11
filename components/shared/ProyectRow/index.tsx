import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ProjectRowProps } from "../../../types/shared/ProjectRow";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import GeneralContext from "../../../state/general/general.context";
const ProjectRow: React.FC<ProjectRowProps> = ({
  link,
  title,
  subject,
  linkSite,
  codeLink,
  stack,
  children,
}) => {
  const router = useRouter();

  const redirect = () => {
    if (link) {
      router.push(link);
    }
  };
  const context = useContext(GeneralContext);

  return (
    <div className="w-full  rounded-sm shadow shadow-gray-strong  my-4 p-4 flex items-center">
      <div>
        <h3 className="py-1  text-secondary font-semibold text-xl">{title}</h3>
        <div className="text-graycust mb-4">
          <p className=" font-normal md:font-thin pb-4">{subject}</p>
          <h3 className="text-graycust font-bold">
            {context?.language?.stack}
          </h3>
          <p> {stack}</p>
        </div>
        <div className="flex flex-col text-sm">
          {codeLink && (
            <a className="text-brown-custom mb-2" href={codeLink}>
              {context?.language?.gitcode}.{" "}
              <FontAwesomeIcon
                className="w-4 h-4 text-secondary text-2xl mx-4 "
                icon={faLink}
              />
            </a>
          )}
          <a
            className="text-brown-custom"
            href={linkSite}
            target="_blank"
            rel="noreferrer"
          >
            {context?.language?.linktosite}
            <FontAwesomeIcon
              className="w-4 h-4 text-secondary text-2xl mx-4 "
              icon={faLink}
            />
          </a>
        </div>
      </div>
      {linkSite && (
        <a href={linkSite} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className="w-6 h-6 text-secondary text-2xl mx-4 "
            icon={faLink}
          />
        </a>
      )}
      {children}
    </div>
  );
};

export default ProjectRow;

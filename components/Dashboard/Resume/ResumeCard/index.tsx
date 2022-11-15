import styles from "./styles.module.css";

import { useRouter } from "next/router";
import { useContext } from "react";
import GeneralContext from "../../../../state/general/general.context";
const Fade = require("react-reveal/Fade");

interface ResumeCardProps {
  title: string | undefined;
  charge?: string;
  description: string | undefined;
  link?: string;
  date: string;
  background: string;
  right?: boolean;
  hiddeButton?: boolean;
  className?: string;
  triggerClass?: string;
}
const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  charge,
  description,
  date,
  link,
  background,
  right,
  hiddeButton,
  className,
  triggerClass,
}) => {
  const context = useContext(GeneralContext);

  const router = useRouter();

  const redirect = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <Fade>
      <div
        style={{
          justifyContent: right ? "flex-end" : "flex-start",
        }}
        className={`${styles.card}  ${className}   `}
      >
        <div className={`${styles.innerCard} bg-darked-900  flex flex-col md:flex-row mx-10`}>
          <div className="w-full md:w-5/12  h-auto  ">
            <img
              className={`${styles.companyImage} `}
              src={background}
              alt=""
            />
          </div>
          <div className="w-full md:w-7/12 h-full text-shadow  lg:pl-6">
            <h3 className="text-white font-bold text-2xl lg:text-3xl pt-10 mb-2">
              {title}
            </h3>
            <p className="text-sm md:text-md xl:text-lg ">{description}</p>
            <p className="pt-3">
              <b>{date}</b>
            </p>
            <div className="mt-8">
              {!hiddeButton && (
                <button
                  onClick={redirect}
                  className={`${triggerClass} ${styles.rcard} mb-8 bg-secondary hover:bg-secondary-200 duration-300  py-3 md:py-5  text-white uppercase font-semibold shadow`}
                >
                  {context?.language?.checkprojects}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ResumeCard;

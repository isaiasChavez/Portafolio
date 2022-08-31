import styles from "./styles.module.css";

import { useRouter } from "next/router";
import { useContext } from "react";
import GeneralContext from "../../../../state/general/general.context";
const Fade = require("react-reveal/Fade");

interface ResumeCardProps {
  title: string;
  charge: string;
  description: string;
  link?: string;
  date: string;
  background: string;
  right?: boolean;
}
const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  charge,
  description,
  date,
  link,
  background,
  right,
}) => {
  const context = useContext(GeneralContext);

  const router = useRouter();

  const redirect = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <div
      style={{
        justifyContent: right ? "flex-end" : "flex-start",
      }}
      className={`${styles.card}     `}
    >
      <div className={`${styles.innerCard} bg-darked-900 shadow-2xl`}>
        <div className={`${styles.innerInnerCard} bg-darked-900 shadow-2xl flex`}>
          <div className="w-5/12 h-full ">
            <img
              className={`${styles.companyImage} `}
              src={background}
              alt=""
            />
          </div>
          <div className="w-7/12 h-full text-shadow  pl-6">
            <h3 className="text-white font-bold text-2xl lg:text-3xl pt-10 mb-2">{title} - {charge} </h3>
            <p className="text-sm md:text-md xl:text-lg ">{description}</p>
            <p className="pt-3">
              <b >{date}</b>
              </p>
            <div className="mt-8">
            <button onClick={redirect} className="w-44 mb-8 bg-secondary hover:bg-secondaryLight duration-300  py-3 md:py-5 md:py-3  text-white uppercase font-semibold shadow">
                Check projects
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

/*
<div className="h-8 font-semibold text-xs md:text-md"> {date}</div>
        <div className={styles.innerCard}>
          <div className="font-medium">
            <h3 className="text-secondary text-lg"> {title}</h3>
            <h4 className="text-md"> {charge}</h4>
          </div>
          <hr className="my-5" />
          <div className="text-sm text-graycust">
            <p>{description}</p>
          </div>
        </div>
 */

import styles from "../resume.module.css";

import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";

interface ResumeCardProps {
  title: string;
  charge: string;
  description: string;
  link?: string;
  date: string;
}
const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  charge,
  description,
  date,
  link,
}) => {
  const router = useRouter();

  const redirect = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <Fade>
      <div
        onClick={redirect}
        className={`${styles.card}  w-full    p-8 m-8 md:m-0 md:mb-8 mb-0  text-white  box-border   border-2  border-graycust `}
      >
        <div className="h-8 font-semibold text-xs md:text-md"> {date}</div>
        <div>
          <div className="font-medium">
            <h3 className="text-secondary text-lg"> {title}</h3>
            <h4 className="text-md"> {charge}</h4>
          </div>
          <hr className="my-5" />
          <div className="text-sm text-graycust">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ResumeCard;

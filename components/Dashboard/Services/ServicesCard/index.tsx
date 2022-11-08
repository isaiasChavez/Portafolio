import styles from "./styles.module.css";
const Fade = require("react-reveal/Fade");

interface ServicesCardProps {
  title: string | undefined;
  description: string | React.ReactNode;
  index: number;
  style?: React.CSSProperties;
  tech:string[]
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  style,
  tech
}) => {
  return (
    <Fade>
      <div  style={style} className={`${styles.main} flex-col md:flex-row py-32 md:py-0  px-8  relative`}>
       
        <div style={{ flex: 1 }} className={`${styles.container} text-white flex flex-col justify-center mb-10`}>
          <h3 className="text-2xl md:text-4xl font-bold text-secondary uppercase">{title}</h3>
          <p className="text-xs md:text-sm text-gray-light mt-4">{description} </p>
          <div className={`${styles.lineDown} mt-4`}></div>
        </div>
        <div className={`${styles.right} text-graycust flex items-center justify-center`}>
          <div className="flex">
            {tech.map(tec => <p key={tec} className={` mx-2  uppercase text-xs md:text-sm`}>{tec}</p>)}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ServicesCard;

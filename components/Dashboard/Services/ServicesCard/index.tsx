import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import GeneralContext from "../../../../state/general/general.context";
const Fade = require("react-reveal/Fade");
const Roll = require("react-reveal/Roll");

interface ServicesCardProps {
  icono: IconProp;
  title: string;
  description: string | React.ReactNode;
  index:number
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  icono,
  title,
  description,
  index
}) => {
  const context = useContext(GeneralContext);

  return (
    <Roll left>
      <div className="  w-full md:w-6/12 md:h-3/6 p-5 flex justify-center items-center text-shadow">
        <div style={{
        }}  className="relative flex w-full h-full flex-col items-center justify-center">
          <div className="h-1/6 text-center mb-4 md:mb-8">
            {" "}
            <FontAwesomeIcon
              className="w-8 h-8 text-shadow text-white text-2xl mx-4"
              icon={icono}
            />{" "}
          </div>
          <div className="h-5/6 flex flex-col items-center text-white">
            <h4 className=" uppercase font-semibold text-3xl mb-5">{title}</h4>
            <p className="text-lg uppercase text-center">{description}</p>
          </div>
        </div>
      </div>
    </Roll>
  );
};

export default ServicesCard;

import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const Fade = require("react-reveal/Fade");
import GeneralContext from "../../../state/general/general.context";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const isShowFields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [showFields, setShowFields] = useState(isShowFields);
  const context = useContext(GeneralContext);
  const onFocus = (e: any) => {
    setShowFields({
      ...isShowFields,
      [e.target.name]: "activeFieldContact",
    });
  };
  return (
    <div
      className={`text-shadow relative bg-darked-900 ${styles.main} flex flex-col justify-center`}
    >
      <div className=" flex flex-1 justify-center items-center flex-wrap md:flex-nowrap py-10">
        <Card
          icono={faMapMarkerAlt}
          title={context?.language?.Ubicacion}
          subtitle="Oaxaca, México"
        />
        <Card
          icono={faMailBulk}
          title="Email"
          subtitle={
            <a href="mailto:isaiaschavez.co@gmail.com">
              isaiaschavez.co@gmail.com
            </a>
          }
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        {
          <a href="mailto:isaiaschavez.co@gmail.com"
            className={` ${styles.rcard} bg-secondary text-lg lg:text-2xl hover:bg-secondary-200 duration-300  py-3 px-8 md:py-5  text-white uppercase font-semibold shadow`}
          >
            SEND ME A MESSAGE
          </a>
        }
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
  icono,
}: {
  title: string;
  subtitle: string | React.ReactNode;
  icono: IconProp;
}) => {
  return (
    <Fade>
      <div className="h-full  w-full p-5 flex social-trigger justify-center items-center">
        <div className=" flex w-full h-full flex-col items-center justify-center">
          <div className="h-1/6 text-center mb-6">
            {" "}
            <FontAwesomeIcon
              className="text-secondary social-trigger mx-4 w-8 h-8  text-2xl "
              icon={icono}
            />{" "}
          </div>
          <div className="h-5/6 flex flex-col items-center text-white">
            <h4 className=" uppercase font-semibold text-lg"> {title} </h4>
            <p className="text-sm mt-3">{subtitle}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Contact;

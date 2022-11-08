import React, { memo, useContext } from "react";
import GeneralContext from "../../../state/general/general.context";
import TextLettering from "../../TextLettering";

const Slide = require("react-reveal/Slide");
import styles from "./styles.module.css";

const Header = () => {
  const context = useContext(GeneralContext);

  return (
    <div
      className={`h-screen w-full px-4 flex  flex-col md:flex-row md:px-20 ${styles.header}`}
    >
      <div className="h-full w-full md:w-8/12   flex justify-start items-center">
        <Slide left>
          <div className=" font-bold flex flex-col justify-start">
            <h1 className="  md:text-2xl lg:text-3xl text-white mb-4">
              {context?.language?.header}
            </h1>
            <h3
              className={`${styles.title} text-3xl md:text-6xl text-secondary`}
            >
              <TextLettering />
            </h3>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default memo(Header);

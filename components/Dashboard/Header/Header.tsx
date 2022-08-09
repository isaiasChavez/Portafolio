import React, { memo } from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={`h-screen w-full px-4 md:px-20 ${styles.header}`}>
      <div className="h-full w-full md:w-6/12 flex justify-start items-center">
        <div className=" font-bold flex flex-col justify-start">
          <h1 className="  md:text-2xl lg:text-3xl text-white mb-4">
            Hey, I am Isaías Chávez
          </h1>
          <h3 className={`${styles.title} text-3xl md:text-6xl text-secondary`}>
            Front End Developer
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default memo(Header);

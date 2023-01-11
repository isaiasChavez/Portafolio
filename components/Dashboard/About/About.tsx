import React, { useContext } from "react";
import GeneralContext from "../../../state/general/general.context";
import styles from "./styles.module.css";
const Slide = require("react-reveal/Slide");

export default function About() {
  const context = useContext(GeneralContext);
  return (
    <div
      className={`   h-full py-10 w-full text-white md:px-10 lg:px-20 bg-darked-900 ${styles.header}`}
    >
      <div
        className={` relative ${styles.aboutContainer} flex px-10 md:px-0 flex-col md:flex-row flex-wrap w-full items-center  mt-8 md:pt-20`}
      >
        <div className=" w-full flex-1 md:w-5/12   flex justify-center md:justify-start items-end md:items-center pb-20 md:pb-0  py-4">
          <img
            alt="Isaías Chávez"
            className={styles.profilePicture}
            src="/assets/img/yo_i.jpeg"
          />
        </div>
        <div className="  flex-1  md:mt-0 w-full md:w-7/12   ">
          <div className="font-bold">
            <Slide right>
              <h3 className="text-lg md:text-xl mb-4 uppercase">
                {context?.language?.hello}
              </h3>
              <hr className="w-1/12 mb-5" />
              <h2 className=" text-xl md:text-xl mb-10 uppercase">
                <b className="text-secondary">{context?.language?.hellorn}</b>{" "}
                {context?.language?.hellowith}{" "}
                <b className="text-secondary">{context?.language?.hellofr}</b>{" "}
                {context?.language?.and}{" "}
                <b className="text-secondary">{context?.language?.helloback}</b>
                .
              </h2>
              <p className="text-sm md:text-lg font-normal ">
                {context?.language?.presentation}
              </p>
            </Slide>
          </div>
          <div className="mt-8">
            <Slide left>
              <button className=" cv-trigger w-56 mb-8 bg-secondary hover:bg-secondaryLight duration-300 py-5 md:py-3  text-white uppercase font-semibold shadow">
                <a href="/assets/cvn.pdf" download="isaias">
                  {context?.language?.downloadcv}
                </a>
              </button>
              <button className="w-56 text-secondary uppercase font-semibold">
                <a href="mailto:isaiaschavez.co@gmail.com">
                  {context?.language?.contratame}
                </a>
              </button>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

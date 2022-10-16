import React, { memo, useContext } from "react";
import GeneralContext from "../../../state/general/general.context";
import styles from "./styles.module.css";
const Slide  = require("react-reveal/Slide");


export default function About() {

  const context = useContext(GeneralContext)


  return (
    <div
    
    className={`   h-full py-10 w-full text-white md:px-10 lg:px-20  ${styles.header}`}>
      <div
        style={{
          opacity:`${ context ? 150 - (context.scrollPercentage*3.6): 0 }%`,
        }}
        className={` relative ${styles.aboutContainer} flex flex-col md:flex-row flex-wrap w-full  items-center  mt-8 md:pt-20`}
      >
        <div
          className=" w-full flex-1 md:w-5/12   flex  justify-center items-end md:items-center pb-20 md:pb-0  py-4"
        >
          <img
            style={{
              transform:`scale(${ context  && ((140 -  context.scrollPercentage *5)>100) ? 140 -  (context.scrollPercentage*5):100}%)`,
              
            }}
            alt="Isaías Chávez"
            className={styles.profilePicture}
            src="/assets/img/yo_i.jpg"
          />
        </div>
        <div
        style={{
          transform:`scale(${ context && 160 -  (context.scrollPercentage*4) > 100 ? 160 -  (context.scrollPercentage*4):100}%)`,
          opacity:`${ context ? 180 - (context.scrollPercentage*4) : 100 }%`
        }}
        className="  flex-1  md:mt-0 w-full px-5 md:w-7/12 md:px-2   ">
          <div>
            <Slide right>

            <h3 className="text-lg md:text-2xl mb-4">
              Hello! I am Isaías Chávez
            </h3>
            <hr className="w-1/12 mb-5" />
            <h2 className=" text-xl md:text-2xl mb-10">
              I am a web and{" "}
              <b className="text-secondary">React Native developer</b> with
              experience in <b className="text-secondary">Frontend</b> and{" "}
              <b className="text-secondary">Backend</b>.
            </h2>
            <p className="text-sm md:text-lg font-normal">
              I&lsquo;m a computer
              Engineer with experience as FullStack/React Native Developer.
              Experienced developer with +2 years of trajectory. Dynamic, success-oriented, I can develop a complete project for you from scratch, 
              backend, fronted and apps. Highly committed to results and continuous improvement. Detail focused to ensure results are above and beyond client's expectations. 
              "Success is not just about winning, is about trascending."
            </p>
            </Slide>
          </div>
          <div className="mt-8">
          <Slide left>


            <button className="w-56 mb-8 bg-secondary hover:bg-secondaryLight duration-300 py-5 md:py-3  text-white uppercase font-semibold shadow">
              <a href="/assets/cvn.pdf" download="isaias">
                Download CV
              </a>
            </button>
            <button className="w-56 text-secondary uppercase font-semibold">
              <a href="#contact">Hire me</a>
            </button>
          </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

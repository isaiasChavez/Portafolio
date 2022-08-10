import React, { memo } from "react";
import styles from "./styles.module.css";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default memo(function About() {
  return (
    <div className="min-h-screen h-full py-10 w-full text-white md:px-10 lg:px-20 flex flex-col  items-center">
      <div
        className={`text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10 ${styles.titleContainer}`}
      >
        <h2 className="text-center text-2xl mb-8 md:mb-4">About me</h2>
        <span className="flex items-center ">
          {" "}
          ----
          <FontAwesomeIcon
            className="w-8 h-8 text-secondary text-2xl mx-4"
            icon={faAddressCard}
          />
          ----{" "}
        </span>
      </div>

      <div
        className={` ${styles.aboutContainer} flex flex-wrap w-full  items-center mt-8 md:mt-4`}
      >
        <div
          className=" w-full md:w-5/12 overflow-hidden flex  justify-center items-center  "
          style={{
            height: "20rem",
          }}
        >
          <Image
            className={styles.profilePicture}
            src="/assets/img/me.jpeg"
            alt="Landscape picture"
            width={400}
            height={400}
          />
        </div>
        <div className="  md:mt-0 w-full px-5 md:w-7/12 md:px-2  mt-8 ">
          <div>
            <h3 className="text-lg md:text-2xl mb-4">
              Hello! I am Isaías Chávez
            </h3>
            <hr className="w-1/12 mb-5" />
            <h2 className=" text-xl md:text-2xl mb-10">
              I am a web and <b className="text-secondary">React Native developer</b> with experience in <b className="text-secondary">Frontend</b> and <b className="text-secondary">Backend</b>.
            </h2>
            <p className="text-sm md:text-lg font-normal">
            Hi, my name is <b> Isaías Chávez</b> and I&lsquo;m a computer Engineer with experience as FullStack/React Native Developer. I&lsquo;m 23 and currently, I&lsquo;m working as a Software engineer. I have made many applications in my career, giving support or making it from scratch. I have experience working on teams from America and have conversational English. I have good soft skills and I can work very well with my teams. I love to learn and listen. I can be a very good tool for your company.
            </p>
          </div>
          <div className="mt-8">
            <button className="w-56 mb-8 bg-secondary py-5 md:py-3 text-white uppercase font-semibold shadow">
              <a href="/assets/cvn.pdf" download="isaias">
                Download CV
              </a>
            </button>
            <button className="w-56 text-secondary uppercase font-semibold">
              <a href="#contact">Hire me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

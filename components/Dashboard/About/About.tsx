import React, { memo } from "react";
import styles from "./styles.module.css";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Link } from "react-scroll";

export default memo(function About() {
  return (
    <div className="min-h-screen h-full py-10 w-full text-white md:px-10 lg:px-20 flex flex-col  items-center">
      <div
        className={`text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10 ${styles.titleContainer}`}
      >
        <h2 className="text-center text-2xl mb-8 md:mb-0">About me</h2>
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
        className={` ${styles.aboutContainer} flex flex-wrap w-full  items-center`}
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
        <div className="  md:mt-0 w-full px-5 md:w-7/12 md:px-2 ">
          <div>
            <h3 className="text-lg md:text-xl mb-4">
              Hello! I am Isaías Chávez
            </h3>
            <hr className="w-1/12 mb-5" />
            <h2 className=" text-xl md:text-2xl mb-10">
              I am a web and mobile developer with experience in front end and
              backend.
            </h2>
            <p className="text-sm md:text-lg">
              Hi, thanks for reading this. My name is Isaías Chávez, I am a
              student of the Computer Engineering career at the Technological
              University of La Mixteca I am currently studying the 5th semester.
              Since I was 17 I have been passionate about the world of web
              development and I have been very aware of all kinds of
              technologies that have been emerging since then. Everything I know
              so far I have learned it self-taught through courses, most of them
              paid for since I was fortunate to be able to acquire a
              subscription to a course platform. I have also taken on Udemy and
              one that another on youtube. I love learning and I love design.
              That is why I have focused on the front-end part but I am also
              filling in the gaps in the backend. If someone gives me the
              opportunity to work professionally, I would love to be able to do
              so. My networks are Facebook Twitter or the codes of my projects
              are in Github COURSES AND WORKSHOPS I HAVE TAKEN
            </p>
          </div>
          <div className="mt-8">
            <button className="w-56 mb-8 bg-secondary py-5 shadow-lg md:py-3 text-white uppercase font-semibold shadow">
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

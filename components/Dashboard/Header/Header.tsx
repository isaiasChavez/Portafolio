import React, { memo, Suspense, useContext } from "react";
import GeneralContext from "../../../state/general/general.context";
import TextLettering from "../../TextLettering";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Slide = require("react-reveal/Slide");
const Fade = require("react-reveal/Fade");
import styles from "./styles.module.css";
import Model from "../../threejs/Model";

const Header = () => {
  const context = useContext(GeneralContext);

  return (
    <div className={`h-screen w-full px-4 flex flex-col md:flex-row md:px-20 ${styles.header}`}>
      <div className="h-full w-full md:w-8/12   flex justify-start items-center">
        <Slide left>
          <div className=" font-bold flex flex-col justify-start">
            <h1
              style={{
                transform: `translate(${
                  context ? context.scrollPercentage * 1.2 : 0
                }rem, ${context?.scrollPercentage}rem)`,
                opacity: `${
                  context ? 100 - context.scrollPercentage * 6 : 100
                }%`,
              }}
              className="  md:text-2xl lg:text-3xl text-white mb-4"
            >
              Hey, I am Isaías Chávez
            </h1>
            <h3
              style={{
                transform: `translate(${
                  context ? context.scrollPercentage * 1.2 : 0
                }rem, ${context?.scrollPercentage}rem)`,
                opacity: `${
                  context ? 100 - context.scrollPercentage * 6 : 100
                }%`,
              }}
              className={`${styles.title} text-3xl md:text-6xl text-secondary`}
            >
              <TextLettering />
            </h3>
          </div>
        </Slide>
      </div>

      <div  style={{
        transform: `translate(-${
                  context ? context.scrollPercentage * 2 : 0
                }rem, ${context? context.scrollPercentage*2:0}rem) scale(${context? 1+(0.02*context.scrollPercentage) :1})`,
                opacity: `${
                  context ? 100 - context.scrollPercentage * 10 : 100
                }%`,
              }} className="md:w-4/12 hidden md:block  h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls autoRotate  enableZoom={false}/>
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
      </div>
    </div>
  );
};

export default memo(Header);

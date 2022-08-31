import React, { useContext } from "react";
import {
  faServer,
  faPen,
  faFlag,
  faCode,
  faG,
} from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesCard from "./ServicesCard";
import GeneralContext from "../../../state/general/general.context";

export default function Services() {

  const context = useContext(GeneralContext)

  return (
    <div 
    style={{
      background:`repeating-linear-gradient(
        ${`${context?-70+(context.scrollPercentage*4):45}deg`},
        #b36b0f,
        #df8816 ${ 20 }px,
        #b36b0f ${ 20 }px,
        #df8816 ${ 20 }px
      )`
    }}
    className={`w-full shadow-lg  py-10 relative bg-secondary-200 ${styles.container}`}>

      
      <svg
        style={{
          zIndex: 10,
          width:'180vw',
          left:`${context ? - 100 + context.scrollPercentage:0}%`
        }}
        className="absolute z-0 top-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 820"
      >
        <path
          fill="#292929"
          fillOpacity="1"
          d="M0,192L9.6,165.3C19.2,139,38,85,58,69.3C76.8,53,96,75,115,85.3C134.4,96,154,96,173,112C192,128,211,160,230,192C249.6,224,269,256,288,272C307.2,288,326,288,346,245.3C364.8,203,384,117,403,117.3C422.4,117,442,203,461,229.3C480,256,499,224,518,202.7C537.6,181,557,171,576,144C595.2,117,614,75,634,74.7C652.8,75,672,117,691,160C710.4,203,730,245,749,250.7C768,256,787,224,806,176C825.6,128,845,64,864,74.7C883.2,85,902,171,922,186.7C940.8,203,960,149,979,160C998.4,171,1018,245,1037,256C1056,267,1075,213,1094,181.3C1113.6,149,1133,139,1152,138.7C1171.2,139,1190,149,1210,133.3C1228.8,117,1248,75,1267,90.7C1286.4,107,1306,181,1325,202.7C1344,224,1363,192,1382,149.3C1401.6,107,1421,53,1430,26.7L1440,0L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z"
        ></path>
      </svg>
      <div className="relative z-30 h-1/6 text-secondary text-shadow uppercase font-semibold flex flex-col justify-center items-center ">
        <h2 className="text-center text-2xl mb-8 md:mb-4 text-shadow">Services</h2>
        <span className="flex items-center text-white">
          ----
          <FontAwesomeIcon
            className="w-8 h-8 text-white text-2xl mx-4"
            icon={faServer}
          />
          ----
        </span>
      </div>
      <div className="relative z-30 h-5/6 w-full flex justify-around flex-wrap mt-8">
        <ServicesCard
          index={4.2}
          icono={faPen}
          title="FrontEnd"
          description={
            <>
              I architect and develop websites and <br /> applications using web
              technologies
            </>
          }
        />
        <ServicesCard
        index={3.5}
          icono={faFlag}
          title="Backend"
          description={
            <>
              I can build and maintain the mechanisms that process <br /> data
              and perform actions on websites
            </>
          }
        />
        <ServicesCard
          index={4.9}
          icono={faCode}
          title="Mobile Apps"
          description={
            <>
              I can build apps for Google’s Android,
              <br /> Apple’s iOS with react native.
            </>
          }
        />
        <ServicesCard
        index={5.3}
          icono={faG}
          title="Google Analytics"
          description={<>Familiarity with Google Cloud Data and Analytics </>}
        />
      </div>
    </div>
  );
}

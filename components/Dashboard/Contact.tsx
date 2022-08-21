import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faMapMarkerAlt,
  faMailBulk,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const Fade = require("react-reveal/Fade");

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const isShowFields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [showFields, setShowFields] = useState(isShowFields);

  const onFocus = (e: any) => {
    console.log(e.target.name);
    console.log({ showFields });
    setShowFields({
      ...isShowFields,
      [e.target.name]: "activeFieldContact",
    });
  };
  return (
    <Element name="contact" id="contact" className="relative">
      <svg
        style={{
          zIndex: -1,
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#292929"
          fillOpacity="1"
          d="M0,192L9.6,176C19.2,160,38,128,58,138.7C76.8,149,96,203,115,240C134.4,277,154,299,173,272C192,245,211,171,230,154.7C249.6,139,269,181,288,176C307.2,171,326,117,346,117.3C364.8,117,384,171,403,202.7C422.4,235,442,245,461,245.3C480,245,499,235,518,229.3C537.6,224,557,224,576,234.7C595.2,245,614,267,634,272C652.8,277,672,267,691,272C710.4,277,730,299,749,272C768,245,787,171,806,154.7C825.6,139,845,181,864,170.7C883.2,160,902,96,922,80C940.8,64,960,96,979,96C998.4,96,1018,64,1037,80C1056,96,1075,160,1094,165.3C1113.6,171,1133,117,1152,117.3C1171.2,117,1190,171,1210,160C1228.8,149,1248,75,1267,74.7C1286.4,75,1306,149,1325,192C1344,235,1363,245,1382,208C1401.6,171,1421,85,1430,42.7L1440,0L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
        ></path>
      </svg>
      <div className="  md:mx-20 lg:mx-32 xl:mx-64 ">
        <div className="h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:pb-10">
          <h2 className="text-center text-2xl mb-8 md:mb-6">Contact me</h2>
          <span className="flex items-center ">
            ----
            <FontAwesomeIcon
              className="w-8 h-8 text-secondary text-2xl mx-4"
              icon={faIdCard}
            />
            ----
          </span>
        </div>
        <div className="lg:h-64 flex justify-center items-center flex-wrap md:flex-nowrap py-10">
          <Card
            icono={faMapMarkerAlt}
            title="Location"
            subtitle="Oaxaca, México"
          />
          <Card
            icono={faMailBulk}
            title="Email"
            subtitle="isaiaschavez.co@gmail.com"
          />
          <Card icono={faPhoneAlt} title="Phone" subtitle="+52 9511212436" />
          <div></div>
        </div>
      </div>
      {/* <div className=' flex flex-wrap mx-5 md:mx-0 bg-darked-900  rounded shadow-lg'>
        <form name="contact" method="POST" data-netlify="true" className='w-full  h-full darked-900 p-10'>
          <div className='w-full  relative flex justify-center items-center h-14 '>
            <input type="hidden" name="contact" value="contact"/>

            <input
              type='text'
              name="name"
              className='w-full bg-transparent border-b-2 h-full 	text-white'
              onFocus={onFocus}
            />
            <span className={`absolute duration-500	 top-0 left-0 text-graycust text-bold ${showFields.name} `} >
              Name
            </span>
          </div>
          <div className='w-full mt-8 relative flex justify-center items-center h-14 '>
            <input
              name="email"
              type='email'
              onFocus={onFocus}
              className='w-full bg-transparent border-b-2 h-full  text-white	'
            />
            <span className={`absolute left-0 duration-500	 top-0 text-graycust text-bold ${showFields.email}`}>
              Email
            </span>
          </div>
          <div className='w-full mt-8 relative flex justify-center items-center h-14 '>
            <input
              name="subject"
              type='text'
              onFocus={onFocus}
              className='w-full bg-transparent border-b-2 h-full 	text-white'
            />
            <span className={`absolute left-0 duration-500	  top-0 text-graycust text-bold ${showFields.subject}`}>
              Subject
            </span>
          </div>
          <div className='w-full mt-20 relative flex justify-center items-center h-56 '>
            <textarea
              name="message"
              onFocus={onFocus}
              className=' w-full bg-transparent border-b-2 h-full text-white'
              rows={3}
            ></textarea>

            <span className={`absolute left-0 top-0  duration-500 text-graycust text-bold ${showFields.message} `}>
              Your message
            </span>
          </div>
          <div className='w-full mt-8 relative flex 	 items-center h-14 '>
            <button
              type='submit'
              className='uppercase text-md  border-yellow-400 hover:opacity-75 border-2 py-3 px-5 text-secondary'
            >
              Send message
            </button>
          </div>
        </form>
      </div> */}
    </Element>
  );
};

const Card = ({
  title,
  subtitle,
  icono,
}: {
  title: string;
  subtitle: string;
  icono: IconProp;
}) => {
  return (
    <Fade>
      <div className="h-full  w-full p-5 flex justify-center items-center">
        <div className=" flex w-full h-full flex-col items-center justify-center">
          <div className="h-1/6 text-center mb-6">
            {" "}
            <FontAwesomeIcon
              className="text-secondary mx-4 w-8 h-8  text-2xl "
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

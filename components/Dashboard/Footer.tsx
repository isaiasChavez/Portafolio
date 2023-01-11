import React from "react";
const Roll = require("react-reveal/Roll");

const Footer = () => {
  return (
    <>
      <div className="h-64 md:h-96 pt-16 md:pt-32 bg-darked shadow-sm">
        <div className="w-10/12 md:w-4/12 text-white mx-auto  h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl mb-2">
            <span className="text-secondary">N</span>orella
          </h3>
          <Roll left cascade>
            <div className="flex justify-around w-full my-8 mb-12">
              <div className="w-8 h-8 mr-2 cursor-pointer ">
                {" "}
                <a
                  target="_blank"
                  className="social-trigger"
                  rel="noreferrer"
                  href="https://github.com/isaiasChavez/"
                >
                  {" "}
                  <img
                    src="/assets/icons/icons8-github.svg"
                    className="social-trigger"
                  />
                </a>
              </div>
              <div className="w-8 h-8 mr-2 cursor-pointer ">
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  className="social-trigger"
                >
                  {" "}
                  <img
                    src="/assets/icons/icons8-instagram.svg"
                    className="social-trigger"
                  />{" "}
                </a>{" "}
              </div>
              <div className="w-8 h-8 mr-2 cursor-pointer ">
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/isaiaschavez/"
                  className="social-trigger"
                >
                  {" "}
                  <img
                    src="/assets/icons/icons8-linkedin-30.svg"
                    className="social-trigger"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </Roll>
          <p className="text-xs md:text-md">
            All Rights Reserved © 2020 Norella
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

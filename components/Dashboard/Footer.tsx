import React from "react";

const Footer = () => {
  return (
    <>
      
      <div className="h-64 md:h-96 pt-16 md:pt-32 bg-darked-900">
        <div className="w-10/12 md:w-4/12 text-white mx-auto  h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl mb-2">
            <span className="text-secondary">N</span>orella
          </h3>
          <div className="flex justify-around w-full my-8 mb-12">
            <div className="w-8 h-8 mr-2 cursor-pointer ">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100002466696106"
              >
                {" "}
                <img src="/assets/icons/icons8-facebook-f.svg" />{" "}
              </a>{" "}
            </div>
            <div className="w-8 h-8 mr-2 cursor-pointer ">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/isaiasChavez/"
              >
                {" "}
                <img src="/assets/icons/icons8-github.svg" />
              </a>
            </div>
            <div className="w-8 h-8 mr-2 cursor-pointer ">
              {" "}
              <a target="_blank" rel="noreferrer" href="#">
                {" "}
                <img src="/assets/icons/icons8-instagram.svg" />{" "}
              </a>{" "}
            </div>
            <div className="w-8 h-8 mr-2 cursor-pointer ">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.tiktok.com/@soyelamargado"
              >
                {" "}
                <img src="/assets/icons/icons8-tik-tok.svg" />
              </a>{" "}
            </div>
          </div>
          <p className="text-xs md:text-md">
            All Rights Reserved © 2020 Norella
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

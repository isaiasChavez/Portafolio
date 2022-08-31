import React from "react";
import Typed from 'react-typed';

const TextLettering = () => {

        const text = 'FullStack Developer'
        const reactNative = '<span className="text-secondary">React Native</span> Developer'


  return (
    <>
    <Typed
    loop 
    backDelay={5000}
                    strings={[text,reactNative]}
                    typeSpeed={40}
                    backSpeed={50}
                />
    </>
  );
};

export default TextLettering;

import React from "react";
import LetteringContainer from "./LetteringContainer";
import LetteringLetter from "./LetteringLetter";
import styles from "./styles.module.css";
import Typed from 'react-typed';

const TextLettering = () => {

        const text = 'FullStack Developer'
        const reactNative = 'React Native Developer'

        let textSplitted =  text.split('')
        console.log({textSplitted})

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

import React from "react";
import styles from "./styles.module.css";

interface LetteringContainerProps {
  children?:React.ReactNode
}

const LetteringContainer:React.FC<LetteringContainerProps> = ({children}) => {
  return (
    <>
            {children}
    </>
  );
};

export default LetteringContainer;

import React from "react";
import styles from "./styles.module.css";

interface LetteringLetterProps {
    letter:string
}
const LetteringLetter:React.FC<LetteringLetterProps> = ({letter}) => {
  return (
    <span className={styles.letter}>
    {letter}
    </span>
  );
};

export default LetteringLetter;

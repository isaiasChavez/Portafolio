import React, { useContext } from "react";
import styles from "./styles.module.css";
import ServicesCard from "./ServicesCard";
import GeneralContext from "../../../state/general/general.context";

export default function Services() {
  const context = useContext(GeneralContext);

  return (
    <div
      className={`w-full shadow-lg  py-10 relative bg-darked-900 ${styles.container}`}
    >
      <div className={`relative z-30 lg:px-10  ${styles.innerContainer}`}>
        <div className={styles.leftSide}>
          <ServicesCard
            tech={['HTML','CSS','ANT DESIGN']}
            index={4.2}
            title={context?.language?.frontend}
            description={<>{context?.language?.architec}</>}
          />
          <ServicesCard
            tech={['Nodejs','Nestjs','Postgresql']}
            index={3.5}
            title={context?.language?.backend}
            description={<>{context?.language?.build}</>}
          />
          <ServicesCard
            tech={["React Native"]}
            index={4.9}
            title={context?.language?.movile}
            description={<>{context?.language?.canbuild}</>}
          />
        </div>
      </div>
    </div>
  );
}

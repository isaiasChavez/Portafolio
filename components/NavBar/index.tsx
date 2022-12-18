import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import GeneralContext from "../../state/general/general.context";
import { Langs } from "../../state/general/types";
import Toggle from "../shared/ToggleButtton";
import styles from "./styles.module.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [enabled, setEnabled] = useState(false);
  const context = useContext(GeneralContext);
  const onClickToggle = () => {
    setEnabled(!enabled);
    if (enabled) {
      context?.getEnglish();
    } else {
      context?.getSpanish();
    }
  };
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (context?.lan === Langs.ES) {
      setEnabled(true);
    }
  }, [context?.lan]);

  return (
    <div
      className={`${styles.nav} flex shadow-md bg-darked `}
      style={{
        opacity: hover
          ? 1
          : `${
              0 +
              (context?.scrollPercentage ? context?.scrollPercentage : 0) * 3.5
            }%`,
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className={styles.title}>
        <h1 className="text-xl  ">
          <Link href="/">Isaías Chávez</Link>
        </h1>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex">
          <div className={`  ${styles.menuItem}`}>
            <span
              className={`${styles.menuItemInner} hidden md:block ${styles.menuItemPrimary}`}
            >
              <a href="mailto:isaiaschavez.co@gmail.com">
                {context?.language?.contactame}
              </a>
            </span>
          </div>

          <div className={styles.menuItem}>
            <Toggle onPress={onClickToggle} enabled={enabled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const Fade = require("react-reveal/Fade");
import { faPercentage } from "@fortawesome/free-solid-svg-icons";
import { UIEvent, useContext, useState } from "react";
import GeneralContext from "../../../state/general/general.context";

interface LayoutProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  padding?: string;
  flex?: boolean;
  fade?: boolean;
  background?:string,
}

const Layout: React.FC<LayoutProps> = ({
  children,
  styles,
  className,
  padding,
  flex,
  fade,
  background = 'bg-darked',
}) => {

  const context = useContext(GeneralContext)
  

  const handleScroll = (event:UIEvent<HTMLDivElement>) => {
    const percentage = Math.trunc((event.currentTarget.scrollTop * 100) / event.currentTarget.scrollHeight)
    context?.setScrollPercentage(percentage)
  };
  
  if (!context) {
      return null
  }

  return (
    <div
    onScroll={handleScroll}
    
      className={`${className} ${background} overflow-x-hidden ${` ${
        flex ? "flex" : ""
      } `} fixed overflow-y-scroll w-full h-full  `}
      style={{
        padding,
        ...styles,
        backgroundSize:` ${150 + context?.scrollPercentage}% auto `,
        backgroundPositionY:` ${ context? 30 + context.scrollPercentage:100}%`,
      }}
    >
      {fade ? <Fade big>{children}</Fade> : children}
    </div>
  );
};

export default Layout;

import Footer from "../../Dashboard/Footer";

const Fade = require("react-reveal/Fade");

interface LayoutProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  padding?: string;
  flex?: boolean;
  fade?: boolean;
  background?:string,
}

const LayoutEmpty: React.FC<LayoutProps> = ({
  children,
  styles,
  className,
  padding,
  flex,
  fade,
  background = 'bg-darked',
}) => {

  
  return (
    <div
      className={`${className} ${background} ${` ${
        flex ? "flex" : ""
      } `} fixed overflow-y-scroll w-full h-full  `}
      style={{
        padding,
        ...styles,
      }}
    >
      {fade ? <Fade big>{children}</Fade> : children}
    </div>
  );
};

export default LayoutEmpty;

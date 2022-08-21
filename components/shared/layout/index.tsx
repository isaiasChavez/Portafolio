const Fade = require("react-reveal/Fade");

interface LayoutProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  padding?: string;
  flex?: boolean;
  fade?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  styles,
  className,
  padding,
  flex,
  fade,
}) => {
  return (
    <div
      className={`${className} ${` ${
        flex ? "flex" : ""
      } `} fixed overflow-y-scroll w-full h-full bg-darked `}
      style={{
        padding,
        ...styles,
      }}
    >
      {fade ? <Fade big>{children}</Fade> : children}
    </div>
  );
};

export default Layout;

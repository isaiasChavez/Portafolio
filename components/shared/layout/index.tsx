interface LayoutProps {
  children: React.ReactNode;
  styles?:React.CSSProperties
  className?:string
  padding?:string
  flex?:boolean
}

const Layout: React.FC<LayoutProps> = ({ children,styles,className,padding,flex }) => {
  return (
    <div className={`${className} ${` ${flex?'flex':''} `} fixed overflow-y-scroll w-full h-full bg-darked `} style={{
      padding,
      ...styles}}>
      {children}
    </div>
  );
};

export default Layout;

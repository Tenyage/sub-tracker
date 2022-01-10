import LogoImage from "next/image";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <LogoImage src="/logo.png" alt="logo" width="844" height="145" />
    </div>
  );
};

export default Logo;

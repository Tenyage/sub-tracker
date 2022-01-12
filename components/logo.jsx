import * as React from "react";
import LogoImage from "next/image";
import { styled } from "@mui/material/styles";

const StyledLogoWrapper = styled("div")(({ theme }) => ({
 display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  marginTop: "25vh",
}));

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <LogoImage src="/logo.png" alt="logo" width="844" height="145" />
    </StyledLogoWrapper>
  );
};

export default Logo;

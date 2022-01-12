import * as React from "react";
import LogoImage from "next/image";
import { styled } from "@mui/material/styles";

const StyledLogoWrapper = styled("div")(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%",
  marginTop: "25vh",
}));

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <LogoImage src="/logo.png" alt="logo" width="1025" height="200" layout="responsive"/>
    </StyledLogoWrapper>
  );
};

export default Logo;

import Logo from "../components/Logo";
import { SearchBar } from "../components/SearchBar";
import { TrackedButton } from "../components/TrackedButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledLogoWrapper = styled("div")(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%",
  marginTop: "25vh",
}));

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          marginBottom: "5vh",
        }}
      >
        <StyledLogoWrapper><Logo/></StyledLogoWrapper>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <SearchBar width={"50%"}/>
        <TrackedButton />
      </Box>
    </>
  );
};

export default HomePage;

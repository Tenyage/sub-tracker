import Logo from "../components/Logo";
import { SearchBar } from "../components/SearchBar";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          marginBottom: "5vh",
        }}
      >
        <Logo />
      </Box>
      <SearchBar isHomePage={true} />
    </>
  );
};

export default HomePage;

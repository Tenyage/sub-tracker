import Logo from "../components/Logo";

import { SearchBar } from "../components/SearchBar";
import Box from "@mui/material/Box"
import { ChannelCard } from "../components/ChannelCard";


const HomePage = () => {
  return (
    <>
      <Box sx={{
        marginBottom: '5vh',
      }}>
        <Logo />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <SearchBar width={"50%"}/>
      </Box>
      
    </>
  );
};

export default HomePage;

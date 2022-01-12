import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { SearchBar } from "../../components/SearchBar";
import Image from "next/image";
import ChartData from "../../components/ChartData";

const DetailsPage = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ width: "200px" }}>
            <Image
              src="/logo.png"
              alt="logo"
              width="1025"
              height="200"
              layout="responsive"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar isDetailsPage={true} />
        </Toolbar>
      </AppBar>
      <ChartData />
    </>
  );
};

export default DetailsPage;

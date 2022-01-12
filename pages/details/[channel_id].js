import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SearchBar } from "../../components/searchBar";

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
          <Typography variant="h6" noWrap component="div" color="black">
            SubTracker
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar isDetailsPage={true} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DetailsPage;

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import SearchBar from "../../components/SearchBar";
import TrackedButton from "../../components/TrackedButton";
import Button from "../../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import ChartData from "../../components/ChartData";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const { channel_id } = router.query;
  const cachedSearchParam = router.query.searchParam;

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
          <Button
            sx={{ mr: 3 }}
            aria-label="back"
            onClick={() =>
              router.push({
                pathname: "/search-channels",
                ...(cachedSearchParam && {
                  query: { searchParam: cachedSearchParam },
                }),
              })
            }
          >
            <ArrowBackIcon />
          </Button>
          <TrackedButton />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "30px",
        }}
      >
        <ChartData channelID={channel_id} />
      </Box>
    </>
  );
};

export default DetailsPage;

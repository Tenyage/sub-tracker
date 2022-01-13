import React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "../components/Button";
import TrackedButton from "../components/TrackedButton";
import ChannelCard from "../components/ChannelCard";
import Box from "@mui/material/Box";
import SearchBar from "../components/SearchBar";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TrackedPage = () => {
  const router = useRouter();
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
          <SearchBar isTrackedPage={true} />
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
          margin: 10,
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        <ChannelCard
          avatarImg="data:image/jpeg;base64,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"
          channelName="Logan Paul"
          subscribers="123456"
          channelID="adskfljl;khjreq"
        />
      </Box>
    </>
  );
};

export default TrackedPage;

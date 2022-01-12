import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";

import { SearchBar } from "../../components/SearchBar";
import { TrackedButton } from "../../components/TrackedButton";

export default function SearchChannelsPage({}) {
  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box sx={{ width: "200px"}}>
          <Image src="/logo.png" alt="logo" width="1025" height="200" layout="responsive" />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <SearchBar />
        <TrackedButton/>
      </Toolbar>
    </AppBar>
  );
}

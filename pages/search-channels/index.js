import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import ChannelCard from "../../components/ChannelCard";
import TrackedButton from "../../components/TrackedButton";

export default function SearchChannelsPage({}) {
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
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
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
          avatarImg="https://yt3.ggpht.com/ytc/AKedOLRd3Ay_9i1wG1uwPSeUMPIyrygNVruBanvwueBF=s176-c-k-c0x00ffffff-no-rj-mo"
          channelName="GizmoSlip"
          subscribers="32201234"
          channelID="gizmoslipid"
          disabled
        />
        <ChannelCard
          avatarImg="https://yt3.ggpht.com/ytc/AKedOLRO0mZ7C9zoRIZgGvyYpcrDI76tU0poc4qfXRQL1Q=s88-c-k-c0x00ffffff-no-rj"
          channelName="Unbox Therapy"
          subscribers="18200000"
          channelID="unboxtherapyid"
          disabled
        />
        <ChannelCard
          avatarImg="https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s176-c-k-c0x00ffffff-no-rj-mo"
          channelName="Google Developers"
          subscribers="2218900"
          channelID="googledevelopersid"
          disabled
        />
        <ChannelCard
          avatarImg="https://yt3.ggpht.com/ytc/AKedOLQGKDhfIUhBrv9C1hKgMDZsUJbjelfPvXrelFncvw=s176-c-k-c0x00ffffff-no-rj-mo"
          channelName="3Blue1Brown"
          subscribers="4240026"
          channelID="3blue1brownid"
          disabled
        />
      </Box>
    </>
  );
}

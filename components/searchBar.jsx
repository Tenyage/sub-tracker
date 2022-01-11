import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import router from "next/router";
import classes from "./searchBar.module.css";
import { useState } from "react";

const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export const SearchBar = () => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div className={classes.wrapper}>
          <TextField
            sx={{ ml: 1, mr: 1, width: 700 }}
            label="Search for..."
            size="small"
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <RedButton
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={() => {
              router.push({
                pathname: "/search",
                // query: { searchParam: searchParam },
              });
            }}
          >
            Search
          </RedButton>
        </div>
      </Box>
    </>
  );
};

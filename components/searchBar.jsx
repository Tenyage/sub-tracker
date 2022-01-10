import React from "react";
import { Button, Input, TextField } from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, width } from "@fortawesome/free-solid-svg-icons/faSearch";
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
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <RedButton
            sx={{ fontSize: 25 }}
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faSearch} />}
            onClick={() => {
              console.log(searchParam);
              router.push("/search");
            }}
          >
            Search
          </RedButton>
        </div>
      </Box>
    </>
  );
};

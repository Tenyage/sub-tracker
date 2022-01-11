import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import router from "next/router";
import { useState } from "react";

const Search = styled("div")(({ theme, minWidth }) => ({
  position: "relative",
  display: "flex",
  color: theme.palette.common.black,
  border: `3px solid ${theme.palette.common.black}`,
  borderRadius: 5,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(3),
  justifyContent: "space-between",
  minWidth: minWidth || "40%",
  width: "auto",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.75),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledInputWrapper = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "50%",
}));

const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export const SearchBar = ({ minWidth, isHomePage }) => {
  const [searchParam, setSearchParam] = useState("");

  return isHomePage ? (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <StyledInputWrapper>
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
                pathname: "/search-channels",
                // query: { searchParam: searchParam },
              });
            }}
          >
            Search
          </RedButton>
        </StyledInputWrapper>
      </Box>
    </>
  ) : (
    <>
      <Search minWidth={minWidth}>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton size="small" aria-label="perform search" color="primary">
          <SearchIcon />
        </IconButton>
      </Search>
    </>
  );
};

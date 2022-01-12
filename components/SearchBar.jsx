import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useState } from "react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Search = styled("div")(({ theme, minwidth, width, maxwidth }) => ({
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
  minWidth: minwidth || "40%",
  width: width || "auto",
  maxWidth: maxwidth || "100%",
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
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export const SearchBar = ({
  minWidth,
  width,
  maxWidth,
  isHomePage,
  isTrackedPage,
  isDetailsPage,
}) => {
  const [searchParam, setSearchParam] = useState("");
  const router = useRouter();
  const cachedSearchParam = router.query.searchParam;

  return isHomePage ? (
    <>
      <Box>
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
            onClick={() =>
              router.push({
                pathname: "/search-channels",
                ...(searchParam && { query: { searchParam: searchParam } }),
              })
            }
          >
            Search
          </RedButton>
        </StyledInputWrapper>
      </Box>
    </>
  ) : (
    <>
      <Search minwidth={minWidth} width={width} maxwidth={maxWidth}>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchParam(e.target.value)}
          defaultValue={cachedSearchParam}
        />
        <IconButton
          size="small"
          aria-label="perform search"
          color="primary"
          onClick={() =>
            router.push({
              pathname: "/search-channels",
              ...((searchParam || cachedSearchParam) && {
                query: { searchParam: searchParam || cachedSearchParam },
              }),
            })
          }
        >
          <SearchIcon />
        </IconButton>
      </Search>
      {(isTrackedPage || isDetailsPage) && (
        <Button
          sx={{ mr: 3 }}
          variant="contained"
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
      )}
      {!isTrackedPage && !isHomePage && (
        <Button
          variant="contained"
          startIcon={<LocationSearchingIcon />}
          onClick={() =>
            router.push({
              pathname: "/tracked",
            })
          }
        >
          Tracked
        </Button>
      )}
    </>
  );
};

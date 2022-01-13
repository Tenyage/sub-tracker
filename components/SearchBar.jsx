import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = styled("div")(({ theme, minwidth, width, maxwidth }) => ({
  position: "relative",
  display: "flex",
  color: theme.palette.common.black,
  border: `3px solid ${theme.palette.common.black}`,
  borderRadius: 5,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: "100ms linear",
  "&:hover": {
    border: `1px solid ${theme.palette.common.black}`,
    marginLeft: `calc(${theme.spacing(3)}+2px)`,
    marginRight: `calc(${theme.spacing(3)}+2px)`,
  },
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  justifyContent: "space-between",
  minWidth: minwidth || "40%",
  width: width || "auto",
  maxWidth: maxwidth || "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.75),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchBar = ({ minWidth, width, maxWidth }) => {
  const [searchParam, setSearchParam] = useState("");
  const router = useRouter();
  const cachedSearchParam = router.query.searchParam;

  return (
    <>
      <Search minwidth={minWidth} width={width} maxwidth={maxWidth}>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchParam(e.target.value)}
          defaultValue={cachedSearchParam}
          onKeyPress={(e) =>
            e.key === "Enter" &&
            router.push({
              pathname: "/search-channels",
              ...((searchParam || cachedSearchParam) && {
                query: { searchParam: searchParam || cachedSearchParam },
              }),
            })
          }
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
    </>
  );
};

export default SearchBar;

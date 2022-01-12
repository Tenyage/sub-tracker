import * as React from 'react'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'

const Search = styled('div')(({
  theme,
  minwidth,
  width,
  maxwidth,
}) => ({
  position: 'relative',
  display: 'flex',
  color: theme.palette.common.black,
  border: `3px solid ${theme.palette.common.black}`,
  borderRadius: 5,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  justifyContent: 'space-between',
  minWidth: minwidth || '40%',
  width: width || 'auto',
  maxWidth: maxwidth || '100%',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.75),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const SearchBar = ({
  minWidth,
  width,
  maxWidth,
}) => {
  return (
    <>
    <Search minwidth={minWidth} width={width} maxwidth={maxWidth}>
      <StyledInputBase 
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
      />
    <IconButton size="small" aria-label="perform search" color="primary"><SearchIcon/></IconButton>
    </Search>
    </>
  )
}

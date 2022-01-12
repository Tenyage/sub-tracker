import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  border: `3px solid ${theme.palette.primary.main}`,
  ['&:hover']: {
    border: `3px solid ${theme.palette.primary.main}`,
  }
})) 

export const TrackedButton = ({}) => {
  return (
    <CustomButton variant="outlined" endIcon={<LocationSearchingIcon/>}>TRACKED</CustomButton>
  )
}

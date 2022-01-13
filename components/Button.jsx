import Button from '@mui/material/Button'
import { styled, alpha } from '@mui/material/styles'

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  border: `3px solid ${theme.palette.primary.main}`,
  transition: "100ms linear",
  ['&:hover']: {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
  }
})) 

export default CustomButton

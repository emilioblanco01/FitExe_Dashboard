import React from 'react';
import { styled } from "@mui/material/styles"
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#D9A404"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#D9A404"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D9A404"
    },
    "&:hover fieldset": {
      borderColor: "#D9A404"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D9A404"
    }
  }
});

const CustomInput = ({
  label,
  value,
  onChange
}) => {
  return (
      <StyledTextField 
        fullWidth
        style={{marginTop: 25}}
        label={label} 
        value={value}
        InputLabelProps={{shrink: true}}
        onChange={onChange}/>
  )
}

export default CustomInput
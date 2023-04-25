import React from 'react';
import { styled } from "@mui/material/styles"
import { TextField } from '@mui/material';
//ICons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
  onChange,
  isPassword,
  visibility,
  onVisibility
}) => {
  return (
      <StyledTextField 
        fullWidth
        style={{marginTop: 25}}
        label={label} 
        value={value}
        InputLabelProps={{shrink: true}}
        InputProps={isPassword ? {
          endAdornment: (
            visibility ? 
              <VisibilityIcon 
                style={{cursor: "pointer"}}
                onClick={onVisibility}/> : 
              <VisibilityOffIcon 
                style={{cursor: "pointer"}}
                onClick={onVisibility}/>
          ),
          type: !visibility ? "text" : "password"
        }: null
        }
        onChange={onChange}/>
  )
}

export default CustomInput
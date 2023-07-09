import React from 'react';

//ICons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// StyledComponents
import { StyledTextField } from '../../styles/StyledComponents.js';

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
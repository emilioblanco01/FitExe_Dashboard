import React, {useState, useEffect} from 'react';
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { InputTextProps, InputSelectProps } from './Input.interface';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { StyledInputAdd, StyledSelect } from '../../styles/StyledComponents';

export const FormInput = ({ label, onChange, value, name, type }: InputTextProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <StyledInputAdd
            fullWidth
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            name={name}
            label={label}
            onChange={onChange}
            value={value}
            InputLabelProps={{ shrink: true }}
            InputProps={{
                style: {
                    fontSize: 12,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                },
                endAdornment: type === "password" ? (
                    <InputAdornment position="end">
                        {showPassword ? (
                            <Visibility
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <VisibilityOff
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                            />
                        )}
                    </InputAdornment>
                ) : null,
            }}
            
            style={{
                margin: 10,
            }}
        />
    )
};

export const FormSelectbyId = ({ label, value, onChange, options, name }: InputSelectProps) => {
    return (
        <StyledSelect fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                {
                    options.map((option : {id: number, TrainingType: string}) => (
                        <MenuItem key={option.id} value={option.id}>{option.TrainingType}</MenuItem>
                    ))
                }
            </Select>
        </StyledSelect>
    )
};
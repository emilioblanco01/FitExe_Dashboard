import React from 'react';
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { InputTextProps, InputSelectProps } from './Input.interface';

import { StyledInputAdd, StyledSelect } from '../../styles/StyledComponents';

export const FormInput = ({ label, onChange, value }: InputTextProps) => {
    return (
        <StyledInputAdd
            fullWidth
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
                }
            }}
            style={{
                margin: 10,
            }}
        />
    )
};

export const FormSelectbyId = ({ label, value, onChange, options }: InputSelectProps) => {
    return (
        <StyledSelect fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
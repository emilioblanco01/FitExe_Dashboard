import { SelectChangeEvent } from "@mui/material";
import { ChangeEventHandler } from "react";

export interface InputProps {
    label: string;
    value: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    name?: string;
}

export interface InputTextProps extends InputProps {
    rows?: number;
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export interface InputSelectProps extends InputProps {
    options: {id: number, TrainingType: string}[];
    onChange: (event: SelectChangeEvent) => void;
}
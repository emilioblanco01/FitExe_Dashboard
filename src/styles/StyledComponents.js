import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

/**
 * StyledTextField
 * Componente para estilizar los TextField del Login
 */

export const StyledTextField = styled(TextField)({
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

/**
 * StyledInputAdd
 * Componente para estilizar los TextField del Modal para agregar un nuevo elemento
 */

export const StyledInputAdd = styled(TextField)({
    "& label.Mui-focused": {
        color: "#D9A404"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#141E26"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#141E26"
        },
        "&:hover fieldset": {
            borderColor: "#141E26"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#141E26"
        }
    },
    "& .MuiInputLabel-root": {
        color: "#141E26",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Montserrat",
        "&.Mui-focused": {
            color: "#141E26"
        }
        
    }
    
});

/**
 * StyledButtonCancel
 * Componente para estilizar los botones de cancelar del Modal para agregar un nuevo elemento
 */

export const StyledButtonCancel = styled(Button)({
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    backgroundColor: "red",
    "&:hover": {
        color: "white",
        backgroundColor: "rgba(255, 0, 0, 0.7)"
    }
});

/**
 * StyledButtonAdd
 * Componente para estilizar los botones de agregar del Modal para agregar un nuevo elemento
 */

export const StyledButtonAdd = styled(Button)({
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    backgroundColor: "#D9A404",
    "&:hover": {
        color: "white",
        backgroundColor: "rgba(217, 164, 4, 0.7)"
    }
});

/**
 * StyledSelect
 * Componente para estilizar los Select del Modal para agregar un nuevo elemento
 */

export const StyledSelect = styled(FormControl)({
    "& .MuiInputBase-root": {
        color: "#141E26",
        borderColor: "#141E26",
    },
    "& label.Mui-focused": {
        color: "#D9A404"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#141E26"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#141E26"
        },
        "&:hover fieldset": {
            borderColor: "#141E26"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#141E26"
        }
    },
    "& .MuiInputLabel-root": {
        color: "#141E26",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Montserrat",
        "&.Mui-focused": {
            color: "#141E26"
        }
        
    }
});
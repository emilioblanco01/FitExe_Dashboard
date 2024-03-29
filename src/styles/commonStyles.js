import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#D9A404',
            contrastText: '#ffcc00',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Provide every color token (light, main, dark, and contrastText) when using
        // custom colors for props in Material UI's components.
        // Then you will be able to use it like this: `<Button color="custom">`
        // (For TypeScript, you need to add module augmentation for the `custom` value)
        custom: {
            main: '#D9A404',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "#D9A404"
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#D9A404",
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#D9A404',
                },
            },
        },
        MuiButton:{
            styleOverrides:{
                root: {
                    color: "white"
                }
            }
        },
        MuiTooltip:{
            styleOverrides:{
                tooltip: {
                    backgroundColor: "#D9A404",
                    color: "white",
                    fontSize: 13
                },
                arrow: {
                    color: "#D9A404"
                }
            }},
        MuiTableHead:{
            styleOverrides:{
                root: {
                    backgroundColor: "#D9A404",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                }   
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root: {
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                }
            }
        }
    }
});

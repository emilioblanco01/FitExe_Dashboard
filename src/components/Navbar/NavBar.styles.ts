import React from "react";

/**
 * @desc This is the styles for the Navigation component
 * @param makeStyles - this is a custom hook API for styling
 * @param createStyles - used to create styles with a hook API
 * @param Theme - this is the theme provided to the component
 * @returns the styles for the Navigation component
 */

import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { theme as themes } from '../../styles/commonStyles';

// styles for the Navigation component

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        IconStyles: {
            color: "#FFFFFF",
            cursor: "pointer",
            marginRight: 10,
            transitionDelay: "0.5s",
            "&:hover": {
                color: "#D9A404",
            },
        },
        containerIcon: {
            width: "93%",
            height: "100%",
            float: "right",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
        },
        container: {
            width: 90,
            height: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 25,
        },
        iconStyle: { 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            [themes.breakpoints.up('md')]: {
                display: "none",
                position: "none",
            },
        }
    }),
);

export const style = {
    backgroundColor: "#141E26",
    color: "#FFFFFF",
    height: 60,
    borderBottom: "8px solid #D9A404",
    display: "flex",
}

export const styleGroupBotton = {
    backgroundColor: "white",
    //Alinear a la derecha
    float: "right",
}
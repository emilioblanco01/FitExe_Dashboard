/**
 * @desc This is the styles file for the Navigation component
 * @param makeStyles - this is a custom hook API for styling
 * @param createStyles - used to create styles with a hook API
 * @param Theme - this is the theme provided to the component
 * @returns the styles for the Navigation component
 */

import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// styles for the Navigation component

export const useStyles = makeStyles((theme : Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            height: '10%',
            cursor: "pointer",
        },
    }),
);
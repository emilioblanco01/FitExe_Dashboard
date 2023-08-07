/**
 * @desc This is the styles for the Navigation component
 * @param makeStyles - this is a custom hook API for styling
 * @param createStyles - used to create styles with a hook API
 * @param Theme - this is the theme provided to the component
 * @returns the styles for the Navigation component
 */

import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { theme as themes } from '../../../styles/commonStyles';

// styles for the Navigation component

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            width: "100%",
            height: "100vh",
        },
        headerStyle: {
            height: 60,
            backgroundColor: "#141E26",
            borderBottom: "8px solid #D9A404",
            color: "white",
            display: "flex",
            alignItems: "center",
            [themes.breakpoints.down('xs')]: {
                backgroundColor: "red",
            }
        },
        bodyStyle: {
            height: "94vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        formStyle: {
            width: "60%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
        },
        buttonsStyle: {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: 15,
        }
    }),
);
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
        container: {
            height: '93vh',
            backgroundColor: "#141E26",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [themes.breakpoints.down('xl')]: {
                height: '90vh',
            },
            [themes.breakpoints.down('md')]: {
                display: "none",
                position: "none",
            }
        },
        navigation: {
            height: '90%',
            display: "flex",
            flexDirection: "column",
        },
        arrowContainer: {
            width: '90%',
            height: '5%',
            display: "flex",
        },
        arrow: {
            fontSize: 25,
            cursor: "pointer",
        }
    }),
);
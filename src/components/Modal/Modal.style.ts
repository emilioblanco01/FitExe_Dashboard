export const styleBox = {
    position: 'absolute',
    // left: '65vw',
    width: '100vw',
    height: "100vh",
    bgcolor: 'white',
    display: "flex",
};

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
        styleBox: {
            position: 'absolute',
            left: '65vw',
            width: '35vw',
            height: "100vh",
            bgcolor: 'white',
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center",
            borderEndStartRadius: "50px",
            backgroundColor: "white",
            [themes.breakpoints.down('sm')]: {
                left: '0vw',
                width: '100vw',
            }
        },
    }),
);
/**
 * @desc Navigation component for the sidebar
 * @param {number} type - type of the navigation
 * @param {string} text - text of the navigation
 * @returns {JSX.Element} - Navigation component
 */

import React, { memo, useEffect, useState } from 'react';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import SlowMotionVideoSharpIcon from '@mui/icons-material/SlowMotionVideoSharp';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../../recoil/Atoms';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

// styles for the component
import { useStyles } from './Nav.style';

// props interface

interface Props {
    type: number,
    text: string,
}

// component

const Nav = (props: Props) => {

    const navigate = useNavigate();
    const [sidebar] = useRecoilState(sidebarState);
    const [Icon, setIcon] = useState<JSX.Element>(<></>);
    const classes = useStyles();

    useEffect(() => {
        switch (props.type) {
            case 1:
                setIcon(<PersonOutlineSharpIcon style={{ fontSize: innerWidth < 1200 ? 25 : 30 }} />);
                break;
            case 2:
                setIcon(<PeopleOutlineSharpIcon style={{ fontSize: innerWidth < 1200 ? 25 : 30 }} />);
                break;
            case 3:
                setIcon(<CachedSharpIcon style={{ fontSize: innerWidth < 1200 ? 25 : 30 }} />);
                break;
            case 4:
                setIcon(<FitnessCenterIcon style={{ fontSize: innerWidth < 1200 ? 25 : 30 }} />);
                break;
            default:
                break;
        }
    }, []);

    // onNavigate

    const onNavigate = () => {
        switch (props.type) {
            case 1:
                navigate('Nuevo-Usuario');
                break;
            case 2:
                navigate('Nuevo-Perfil');
                break;
            case 3:
                navigate('Nueva-Rutina');
                break;
            case 4:
                navigate('Nuevo-Movimiento');
                break;
            default:
                break;
        }
    }

    return (
        <Tooltip 
            title={props.text} 
            placement="right" 
            arrow
            TransitionComponent={Zoom}
            disableHoverListener={!sidebar}>
        <div className={classes.root} onClick={onNavigate}>
            {Icon}
            {
                !sidebar ?
                    <p style={{ marginLeft: 10 }}>{props.text}</p>
                    : null
            }
        </div>
        </Tooltip>
    )
}

export default memo(Nav);
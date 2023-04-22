import React, {useEffect} from 'react';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import SlowMotionVideoSharpIcon from '@mui/icons-material/SlowMotionVideoSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    open: boolean,
    modulo: number,
}

const Modulo = ({
    open,
    modulo,
} : Props) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            height: '10%',
        }}>
            {
                modulo === 1 ? <PersonOutlineSharpIcon style={{
                    fontSize: 30,
                }} /> : <PeopleOutlineSharpIcon style={{
                    fontSize: 30,
                }} />
            }
            <p style={{ marginLeft: 10 }}>Usuarios</p>
        </div>
    )
}

export default Modulo
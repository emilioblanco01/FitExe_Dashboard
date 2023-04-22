import React, {useEffect, useState} from 'react';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import SlowMotionVideoSharpIcon from '@mui/icons-material/SlowMotionVideoSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideBar = () => {

  const [Open, setOpen] = useState(false);

  return (
    <div style={{
      width: '10em',
      height: '90vh',
      backgroundColor: "#141E26",
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: '90%',
        height: '90%',
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: '10%',
        }}>
          <PersonOutlineSharpIcon style={{
            fontSize: 30,
          }} />
          <p style={{ marginLeft: 10}}>Usuarios</p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: '10%',
        }}>
          <PeopleOutlineSharpIcon style={{
            fontSize: 30,
          }} />
          <p style={{marginLeft: 10}}>Perfiles</p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: '10%',
        }}>
          <CachedSharpIcon style={{
            fontSize: 30,
          }} />
          <p style={{marginLeft: 10}}>Rutinas</p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: '10%',
        }}>
          <SlowMotionVideoSharpIcon style={{
            fontSize: 30,
          }} />
          <p style={{marginLeft: 10}}>Tutoriales</p>
        </div>
      </div>
      <div style={{
        width: '90%',
        height: '5%',
        display: "flex",
        justifyContent: "right",
      }}>
        {
          !Open ?
          <ArrowBackIosNewSharpIcon
          onClick={() => setOpen(!Open)}
          style={{
            fontSize: 30,
            cursor: "pointer",
          }} />
          :
          <ArrowForwardIosIcon
          onClick={() => setOpen(!Open)}
          style={{
            fontSize: 30,
            cursor: "pointer",
          }} />
        }
      </div>
    </div>
  )
}

export default SideBar
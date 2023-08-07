/**
 * @desc Componente SideBar
 * Componente que contiene la navegación de la aplicación
 * @version 0.1.0
 * @since 2021-05-26 22:00:00
 * @return {React.FunctionComponent}
 */

import React, {useEffect, useState} from 'react';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../recoil/Atoms';
import Nav from './Navigation/Nav';
import { useStyles } from './SideBar.style';
import { useLocation } from 'react-router-dom';

// Componente SideBar

const SideBar = () => {

  const location = useLocation();
  const pathname = location.pathname.split('dashboard/')[1];
  const classes = useStyles();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  const handleSidebar = () => setSidebar(!sidebar);

  // Renderizado del componente

  return (
    <div
      style={{ width: !sidebar ? '15%' : '5%' }}
      className={classes.container}>
      <div
        style={{
          width: !sidebar ? '90%' : '100%',
          alignItems: sidebar ? "center" : "flex-start"
        }}
        className={classes.navigation}>

        <Nav type={1} text="Usuarios" styles={pathname === "Nuevo-Usuario" || pathname === undefined  ? {color: "#D9A404"} : {}}/>
        <Nav type={3} text="Rutinas" styles={pathname === "Nueva-Rutina" ? {color: "#D9A404"} : {}}/>
        <Nav type={4} text="Movimientos" styles={pathname === "Nuevo-Movimiento" ? {color: "#D9A404"} : {}}/>

      </div>
      <div
        style={{ justifyContent: sidebar ? "center" : "right" }}
        className={classes.arrowContainer}>
        {
          !sidebar ?
            <ArrowBackIosNewSharpIcon
              onClick={handleSidebar}
              className={classes.arrow} />
            :
            <ArrowForwardIosIcon
              onClick={handleSidebar}
              className={classes.arrow} />
        }
      </div>
    </div>
  )
}

export default SideBar
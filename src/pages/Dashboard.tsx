import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/sidebar/SideBar';
import NewUsers from './NewUsers';
import { Routes, Route } from 'react-router-dom';
import NewMovement from './NewMovement';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <main style={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#F2F2F2'
      }}>
        <SideBar/>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="Nuevo-Usuario" element={<NewUsers/>} />
          <Route path="Nuevo-Perfil" element={<NewUsers/>} />
          <Route path="Nueva-Rutina" element={<NewUsers/>} />
          <Route path="Nuevo-Movimiento" element={<NewMovement/>} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard
import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/sidebar/SideBar';
import NewUsers from '../Vistas/NewUsers';
import { Routes, Route } from 'react-router-dom';

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
          <Route path="/" element={<NewUsers/>} />
          <Route path="Nuevo-Usuario" element={<NewUsers/>} />
          <Route path="Nueva-Rutina" element={<NewUsers/>} />
          <Route path="Nuevo-Perfil" element={<NewUsers/>} />
          <Route path="Nuevo-Tutorial" element={<NewUsers/>} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard
import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/sidebar/SideBar';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <main style={{
        display: 'flex',
      }}>
        <SideBar/>
        DashBoard
      </main>
    </div>
  )
}

export default Dashboard
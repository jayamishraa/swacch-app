import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Problems from '../components/Problems';

function Main() {

  // const [sidebar, setSidebar] = useState(false);
  // const handleSidebar = (e) => {val => setSidebar(!val)}

  return (
    <div className='main'>
      <Header />
      <Sidebar />
      <div className="dynamic-container">
        <Outlet />
      </div>
    </div>
  )
}

export default Main

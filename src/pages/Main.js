import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Main() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleSidebar = () => {setIsExpanded(val => !val)}

  return (
    <div className='main'>
      <Header handleSidebar={handleSidebar}/>
      {isExpanded && <Sidebar />}
      <div className={isExpanded ? "dynamic-container-shrinked" : "dynamic-container"}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main

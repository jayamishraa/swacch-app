import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

function Main() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleSidebar = () => {setIsExpanded(val => !val)}

  const [dropdown, isDropdown] = useState(false)
    const handleDropdown = () => {isDropdown(prev => !prev)}

  return (
    <div className='main'>
      <Header handleSidebar={handleSidebar} handleDropdown={handleDropdown}/>
      {dropdown && <Dropdown />}
      {isExpanded && <Sidebar />}
      <div className={isExpanded ? "dynamic-container-shrinked" : "dynamic-container"}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  return (
    <div className="sidebar">
      <div className='profile'>
        <img src="https://cdn.shopify.com/s/files/1/0079/7314/2595/files/HOOP_EARRINGS_FOR_THE_CLEAN_GIRL_AESTHETIC.webp?v=1664994049" className='user-img'/>
        <div>
          <h2>Hi, User!</h2>
        </div>
      </div>
      <div className="sidebar-elements">
          <Link to="/swach-app">
            <i class="fa-solid fa-house">
              <div>Dashboard</div>
            </i>
          </Link>
          <Link>
            <i class="fa-solid fa-user">
              <div>Account</div>
            </i>
          </Link>
          <Link>
            <i class="fa-solid fa-chart-simple">
              <div>Analytics</div>
            </i>
          </Link>
          <Link>
            <i class="fa-solid fa-bell">
              <div>Notifications</div>
            </i>
          </Link>
      </div>
    </div>
  )
}

export default Sidebar

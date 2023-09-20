import React, { useState } from 'react'

function Sidebar() {

  return (
    <div className="sidebar">
        <div className="sidebar-elements">
            <button class="fa-solid fa-house">Dashboard</button>
            <button class="fa-solid fa-user">Account</button>
            <button class="fa-solid fa-chart-simple">Analytics</button>
            <button class="fa-solid fa-bell">Notifications</button>
        </div>
    </div>
  )
}

export default Sidebar

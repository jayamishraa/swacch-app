import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  const linkStyle = {
    textDecoration: 'none'
  }
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  useEffect(()=>{
    setIsComponentMounted(true)
  },[])



  return (
    <div className={isComponentMounted ? 'sidebar animation' : 'sidebar'}>
      <div className='profile'>
        <img src="https://cdn.shopify.com/s/files/1/0079/7314/2595/files/HOOP_EARRINGS_FOR_THE_CLEAN_GIRL_AESTHETIC.webp?v=1664994049" alt='nah' className='user-img'/>
        <div>
          <h2>Hi, User!</h2>
        </div>
      </div>
      <div className="sidebar-elements">
          <Link to="/" style={linkStyle}>
            <i class="fa-solid fa-house">
              <div>Dashboard</div>
            </i>
          </Link>
          <Link to="problems" style={linkStyle}>
          <i class="fa-solid fa-circle-exclamation">
            <div>Problems</div>
          </i>
          </Link>
          <Link to="analytics" style={linkStyle}>
            <i class="fa-solid fa-chart-simple">
              <div>Analytics</div>
            </i>
          </Link>
          <Link to='guidelines' style={linkStyle}>
            <i class="fa-solid fa-scroll">
              <div>Guidelines</div>
            </i>
          </Link>
      </div>
    </div>
  )
}

export default Sidebar

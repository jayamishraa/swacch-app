import React from 'react'
import { useSelector } from 'react-redux'

function Header() { 
  return (
    <div className="header">
      <div className='header-left'>
        <button class="fa-solid fa-bars" />
        <div>Swach-App</div>
      </div>
      <div className="header-right">
        <div className='notification'>
          <i class="fa-solid fa-bell" />
          <span>1</span>
        </div>
        <div className='profile'>
          <img src="https://cdn.shopify.com/s/files/1/0079/7314/2595/files/HOOP_EARRINGS_FOR_THE_CLEAN_GIRL_AESTHETIC.webp?v=1664994049" className='user-img-header'/>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Header

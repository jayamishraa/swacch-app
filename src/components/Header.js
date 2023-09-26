import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) { 
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer'
  }
  return (
    <div className="header">
      <div className='header-left'>
        <button className="fa-solid fa-bars" onClick={props.handleSidebar} style={linkStyle}/>
        <div>Swach-App</div>
      </div>
      <div className="header-right">
        <Link to='notification' className='notification' style={linkStyle}>
          <i className="fa-solid fa-bell" />
          <span>1</span>
        </Link>
        <button className='profile' onClick={props.handleDropdown} style={linkStyle}>
          <img src="https://cdn.shopify.com/s/files/1/0079/7314/2595/files/HOOP_EARRINGS_FOR_THE_CLEAN_GIRL_AESTHETIC.webp?v=1664994049" className='user-img-header' alt='nah'/>
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
  )
}

export default Header

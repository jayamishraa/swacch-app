import React from 'react'
import { Outlet } from 'react-router-dom'

function Analytics() {
  return (
    <div className='analytics'>
      <div className='box box1'>BOX</div>
      <div className='box box2'>BOX</div>
      <div className='box box3'>BOX</div>
      <div className='box box4'>BOX</div>
      <div className='box box5'>BOX</div>
      <div className='box box6'>BOX</div>
      <div className='box box7'>BOX</div>
      <div className='box box8'>BOX</div>
      <Outlet />
    </div>
  )
}

export default Analytics

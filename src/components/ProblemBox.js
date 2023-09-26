import React from 'react'

function ProblemBox() {
  return (
      <div className='problem-box-main'>
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize: '20px', marginTop: '-30px'}}>
          <h2>Let's make this country</h2>
          <h1 style={{color: 'green'}}>CLEANER & GREENER</h1>
        </div>
        <h1>Dashboard</h1>
        <div className='problem-box'>
          <div>
            <h2 className='orange'>Total Problems</h2>
            <h1>100</h1>
          </div>
          <div>
            <h2 className='green'>Solved Problems</h2>
            <h1>50</h1>
          </div>
          <div>
            <h2 className='blue'>Assigned Problems</h2>
            <h1>20</h1>
          </div>
          <div>
            <h2  className='red'>Unsolved Problems</h2>
            <h1>30</h1>
          </div>
      </div>
    </div>
  )
}

export default ProblemBox

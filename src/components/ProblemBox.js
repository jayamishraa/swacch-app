import React from 'react'

function ProblemBox() {
  return (
      <div className='problem-box-main'>
        <h1>Dashboard</h1>
        <div className='problem-box'>
        <div  className='total-problem'>
          <h2>Total Problems</h2>
          <h1>100</h1>
        </div>
        <div className='solved'>
          <h2>Solved Problems</h2>
          <h1>50</h1>
        </div>
        <div className='assigned-problem'>
          <h2>Assigned Problems</h2>
          <h1>20</h1>
        </div>
        <div className='ignore'>
          <h2>xyz Problems</h2>
          <h1>30</h1>
        </div>
      </div>
    </div>
  )
}

export default ProblemBox

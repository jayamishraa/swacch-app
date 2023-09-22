import React from 'react'

function ProblemBox() {
  return (
      <div className='problem-box-main'>
        <h3>lorem</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum venenatis imperdiet. Nunc vel neque id nulla faucibus ornare ut in orci. Vestibulum velit sapien, porttitor ac libero sit amet, cursus rhoncus augue. Duis efficitur accumsan neque nec ultrices. </h4>
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
            <h2  className='red'>xyz Problems</h2>
            <h1>30</h1>
          </div>
      </div>
    </div>
  )
}

export default ProblemBox

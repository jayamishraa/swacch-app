import React from 'react'
import ProblemBox from '../components/ProblemBox'
import Problems from '../components/Problems'
import ImgContainer from '../components/ImgContainer'
import SimpleModal from '../components/SimpleModal'

function DashboardPage() {

  return (
    <div>
      <ImgContainer />
      <div className='dashboard-container-bottom'>

        <ProblemBox />
      </div>
    </div>
  )
}

export default DashboardPage

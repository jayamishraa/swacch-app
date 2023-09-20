import React from 'react'
import { Outlet } from 'react-router-dom'
import problemsData from '../problemsData.json'
function Problems() {
    return(
        <div className='problems'>
            {problemsData.map(data=>{
                return(
                    <div className="problems-tile">
                        <div>{data.name}</div>
                        <div>{data.age}</div>
                        <div>{data.city}</div>
                        <div>
                            <button className='solved'>Solved</button>
                            <button className='ignore'>Ignore</button>
                        </div>
                    </div>
                )
            })}
            <Outlet />
        </div>
    )
}

export default Problems

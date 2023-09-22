import React,{ useState } from 'react'
import { Outlet } from 'react-router-dom'
import problemsData from '../problemsData.json'
import { Button } from '@mui/material'

function Problems({ handleOpen }) {

    const [showAll, setShowAll] = useState(false);
    const handlChange = () => {setShowAll(prev => !prev);}

    return( 
        <div className='problems'>
            <h1>Problems<button onClick={handlChange}>+</button></h1>
            {showAll ? problemsData.map(data=>{
                return(
                    <div>
                    <div className="problems-tile">
                        <div>{data.id}</div>
                        <div>{data.name}</div>
                        <div>{data.address}</div>
                        <div className='problems-tile-button'>
                            <Button variant='contained' onClick={handleOpen}>Expand </Button>
                            <button className='green'>Assign</button>
                            <button className='red'>Ignore</button>
                        </div>
                        </div>
                        <hr />
                    </div>

                )
            }) : problemsData.slice(0,5).map(data=>{
                return(
                    <div>
                    <div className="problems-tile">
                        <div>{data.id}</div>
                        <div>{data.name}</div>
                        <div>{data.address}</div>
                        <div className='problems-tile-button'>
                            <Button variant='contained' onClick={handleOpen}>Expand </Button>
                            <button className='green'>Assign</button>
                            <button className='red'>Ignore</button>
                        </div>
                        </div>
                        <hr />
                    </div>
                    )
                }) 
            }
            <Outlet />
        </div>
    )
}

export default Problems

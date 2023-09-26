import React,{ useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@mui/material'
import API from '../api/api'

function Problems({ handleOpen }) {

    const[data,setData]=useState()
    const [showAll, setShowAll] = useState(false);
    const handlChange = () => {setShowAll(prev => !prev);}
    
    const [loading, setLoading] = useState(false)
    let count = 1
    
    const [apiData, setApiData] = useState([])
    const getApiData = async () =>{
        setLoading(true)
        try{
            const res = await API.get("/All-problems")
            setApiData(res.data.problems)        
            setLoading(false)
        } catch(err) {
            setApiData(err)
        }
        
    }
    // const getProblemdata=async(id)=>{
    //     const res=await fetch( `https://swachh-w8p5.onrender.com/get-photo/${id}`)
    //     setData(res)
    //     return(
    //         <div>{res}</div>
    //     )
    // }
    useEffect(()=>{
        getApiData()
        // axios.get("https://swachh-w8p5.onrender.com/All-problems")
        // .then(res => setApiData(res.data))
    },[])

    return( 
        <div className='problems'>
            <h1>Problems<button onClick={handlChange}>+</button></h1>
            {showAll ? apiData.map(data=>{
                const {_id, name, location} = data
                return(
                    <div>
                    <div className="problems-tile">
                        <div>{count++}</div>
                        <div>{name}</div>
                        <div>{location}</div>
                        <div className='problems-tile-button'>
                            <Button variant='contained' onClick={handleOpen}>Expand </Button>
                            <button className='green'>Assign</button>
                            <button className='red'>Ignore</button>
                        </div>
                        </div>
                        <hr />
                    </div>

                )
            }) : apiData.slice(0,6).map(data=>{
                const {_id, name, location} = data
                return(
                    <div>
                    <div className="problems-tile">
                        <div>{count++}</div>
                        <div>{name}</div>
                        <div>{location}</div>
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

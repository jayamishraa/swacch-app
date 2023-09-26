import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import API from '../api/api'

function AdminList() {
    const [adminData, setAdminData] = useState([])

    const handleAdmin = async() => {
        const admin = await API.get("/get-Allsupervisor")
        setAdminData(admin.data.supervisor)
    }
    useEffect(()=>{
        handleAdmin()
    },[])
    return (
        <div>
            {adminData.map((data)=>{
                const {_id, name} = data
                return(
                    <div key={_id}>
                        <p>{name}</p>
                        <button>Assign</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminList

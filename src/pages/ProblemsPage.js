import React from 'react'
import { useState } from 'react'
import Problems from '../components/Problems'
import SimpleModal from '../components/SimpleModal'
import { Outlet } from 'react-router-dom'

function ProblemsPage() {

    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)

    return (
        <div>
            <Problems handleOpen={ handleOpen }/>
            <SimpleModal open={ open } setOpen={ setOpen }/>
            <Outlet />
        </div>
    )
}

export default ProblemsPage

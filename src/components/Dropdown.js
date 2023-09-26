import React, { useState } from 'react'

function Dropdown() {
    const Items = ["Profile", "Settings", "Log Out",]

    // const [dropdown, isDropdown] = useState(false)
    // const handleDropdown = () => {isDropdown(prev => !prev)}
    return (
        <div className='dropdown'>
            {Items.map(menu => {
                return(
                    <button key={menu}>{menu}</button>
                )
            })}
        </div>
    )
}

export default Dropdown

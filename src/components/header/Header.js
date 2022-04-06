import React from 'react'
import "./header.css"
const Header = ({ setSearch }) => {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="header">
            <div className="header-title">
                Crypto Tracker App
            </div>
            <div className="header-input">
                <input type="search" placeholder="Search by crypto name" onChange={handleChange}></input>
            </div>
        </div>
    )
}

export default Header

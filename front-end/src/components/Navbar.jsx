import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>BOOXMATE</h1>
            <input type="text" name="search" id="search" placeholder="Search for a Book..." />
            <i className="fas fa-search"></i>
            <div className="btn">
                <button className="btn-cart">Cart</button>
                <button className="btn-login">Log In</button>
            </div>
        </div>
    )
}

export default Navbar

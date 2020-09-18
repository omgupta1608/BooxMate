import React from 'react'

const Bookcard = () => {
    return (
        <div className="bookcard">
            <div className="bookcard-left">
                <p>S.Chand Biology</p>
                <small className="location">Location, India</small>
                <small className="date">Posted on: 18-09-2020</small>
            </div>
            <div className="bookcard-right">
                <p>Rs.549</p>
                <button className="book-details"> View Details</button>
            </div>
        </div>
    )
}

export default Bookcard

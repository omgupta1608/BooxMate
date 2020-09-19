import React, { Component } from 'react'
import '../CSS/BookCard.css'

class BookCardforCart extends Component{
    render(){
    return (
        
        <div className="bookcardforcart">  
            
            <div className="bookcard-left" >
                <p>{this.props.bookname}</p>
                <small className="location">{this.props.location}</small>
                <small className="date">{this.props.postdate}</small>
            </div>
            <div className="bookcard-right">
                <i class="fa fa-trash" aria-hidden="true"></i>
                <p>Rs.{this.props.price}</p>
                <button className="btn-details"> View Details </button>
            </div>
        </div>
    )
    }
}

export default BookCardforCart

import React, { Component } from 'react'
import BooksDisplay from './BooksDisplay'
//Hey
class Bookcard extends Component{
    render(){
    return (
        
        <div className="bookcard">  
            
            <div className="bookcard-left" >
                <p>{this.props.bookname}</p>
                <small className="location">{this.props.location}</small>
                <small className="date">{this.props.postdate}</small>
            </div>
            <div className="bookcard-right">
                <p>Rs.{this.props.price}</p>
                <button className="book-details"> View Details </button>
            </div>
        </div>
    )
    }
}

export default Bookcard

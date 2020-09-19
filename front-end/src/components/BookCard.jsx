import React, { Component } from 'react'
import '../CSS/BookCard.css'

class Bookcard extends Component{

    handleCardClick = () => {
        window.open(`/bookDetails/${this.props.bookid}`, '_self');
    }
    render(){
    return (
        
        <div className="bookcard" >  
            
            <div className="bookcard-left" onClick= {this.handleCardClick}>
                <p>{this.props.bookname}</p>
                <small className="location">{this.props.location}</small>
                <small className="date">{this.props.postdate}</small>
            </div>
            <div className="bookcard-right">
                <p>Rs.{this.props.price}</p>
                <button className="btn-details"> View Details </button>
            </div>
        </div>
    )
    }
}

export default Bookcard

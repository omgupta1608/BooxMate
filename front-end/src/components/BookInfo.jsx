import React, { Component } from 'react'

export class BookInfo extends Component {
    

    render() {
        return (
            <div className="bookinfo">
                <small>#Book ID: {this.props.bookid}</small>
                <p className="booktitle">Book Title:{this.props.bookname} </p>
                <p className="bookauthor">Author: {this.props.author}</p>
                <p className="bookprice">Price: Rs.{this.props.price}</p>
                <p className="booklocation">Location: {this.props.location}</p>
                <p className="bookcategory">Category:{this.props.category}</p>
                <p className="description">Descripton: {this.props.description}</p>
                <p className="mode">For {this.props.mode}</p>
                <p className="duration">Renting Period: {this.props.duration}</p>
                <button className="submit">Make a Request</button>
            </div>
        )
    }
}

export default BookInfo

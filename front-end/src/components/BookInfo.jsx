import React, { Component } from 'react'

export class BookInfo extends Component {
    

    render() {
        return (
            <div className="bookinfo">
                <small>#Book ID: 1234</small>
                <p className="booktitle">Book Title: Harry Potter </p>
                <p className="bookauthor">Author: authorname</p>
                <p className="bookprice">Price: Rs.123</p>
                <p className="booklocation">Location: najafgarh</p>
                <p className="bookcategory">Category: Novel</p>
                <p className="description">Descripton: this is a good book</p>
                <p className="mode">For Sale/rent</p>
                <p className="duration">Renting Period: 6 months</p>
                <button className="submit">Make a Request</button>
            </div>
        )
    }
}

export default BookInfo

import React, { Component } from 'react'

export class BookImage extends Component {
    render() {
        return (
            <div className="bookimage">
                <img src={this.props.bookimage} alt=""/>
            </div>
        )
    }
}

export default BookImage

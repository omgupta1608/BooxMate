import React, { Component } from 'react'
import BookCardforCart from './BookCardforCart'

export class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <Navbar />
                <div className="cart-body">
                    <h2>Book in your Cart: </h2>
                    <BookCardforCart />
                    <p>Requested to "name of owner of that book"</p>
                </div>
            </div>
        )
    }
}

export default Cart

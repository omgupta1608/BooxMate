import React, { Component } from 'react'
import BookCardforCart from './BookCardforCart'
import Navbar from './Navbar'
import '../CSS/Cart.css'

export class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <Navbar />
                <div className="cart-body">
                    <h2>Book(s) in your Cart: </h2>
                        <BookCardforCart />
                        <BookCardforCart />
                        <BookCardforCart />
                </div>
            </div>
        )
    }
}

export default Cart

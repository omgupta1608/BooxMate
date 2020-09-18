import React from 'react'
import BookCard from './BookCard'

const books_display = () => {
    return (
        <div className="books_display">
            <div className="heading">
                <h4>Category: {book.category}</h4>\
                <a href="#" target="_blank" rel="noopener noreferrer">View All</a>
            </div>
            <div className="content">
            <BookCard />
            </div>
        </div>
    )
}
 
export default books_display

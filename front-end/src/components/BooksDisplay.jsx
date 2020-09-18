import React from 'react'
import BookCard from './BookCard'

const BooksDisplay = () => {
    return (
        <div className="booksdisplay">
            <div className="heading">
                <h4>Category: Novel</h4>
                <a href="#" target="_blank" rel="noopener noreferrer">View All</a>
            </div>
            <div className="content">
            <BookCard />
            <BookCard />
            <BookCard />
            </div>
        </div>
    )
}
 
export default BooksDisplay

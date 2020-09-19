import React, { Component } from 'react'
import Navbar from './Navbar'
import BookCard from './BookCard'
import '../CSS/Search.css'

export class Search extends Component {
    render() {
        return (
            <div className="search">
                <Navbar />
                <div className="search-result">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        )
    }
}

export default Search

import React, { Component } from 'react';
<<<<<<< Updated upstream
import OneBook from '../api_handlers/singlebook';
=======
import '../CSS/BookDetails.css'
import Navbar from './Navbar';
import BookImage from './BookImage'
import BookInfo from './BookInfo'

>>>>>>> Stashed changes
class BookDetails extends Component {
    state = {  }
    id = '7V2rFh'
    render() { 
        return ( 
<<<<<<< Updated upstream
            <OneBook 
            bookid={this.id}
            ></OneBook>
=======
            <div className="bookdetails">
                <Navbar />
                <div className="info-wrapper">
                    <BookImage />
                    <BookInfo />
                </div>
            </div>
>>>>>>> Stashed changes
        );
    }
}
 
export default BookDetails;
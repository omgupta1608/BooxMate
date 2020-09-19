import React, { Component } from 'react';
import OneBook from '../api_handlers/singlebook';
class BookDetails extends Component {
    state = {  }
    id = '7V2rFh'
    render() { 
        return ( 
            <OneBook 
            bookid={this.id}
            ></OneBook>
        );
    }
}
 
export default BookDetails;
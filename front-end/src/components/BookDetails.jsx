import React, { Component } from 'react';
import '../CSS/BookDetails.css'
import Navbar from './Navbar';
import BookImage from './BookImage'
import BookInfo from './BookInfo'

class BookDetails extends Component {
    state = {  }
    id = '7V2rFh'
    render() { 
        return ( 
            <div className="bookdetails">
                <Navbar />
                <div className="info-wrapper">
                    <BookImage 
                        bookimage="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpsorcstone.jpg"
                    ></BookImage>
                    <BookInfo 
                        bookid="n3Dar4"
                        bookname="Harry potter"
                        description="The first part of the Harry Potter franchise"
                        price="350"
                        author="J K Rowling"
                        location="New Delhi"
                        category="Novel"
                        mode="Sell"
                        duration="-"
                    ></BookInfo>
                </div>
                <div className="info-wrapper">
                <BookImage 
                        bookimage="https://images-na.ssl-images-amazon.com/images/I/51xMbGsHfkL._SX372_BO1,204,203,200_.jpg"
                ></BookImage>
                    <BookInfo 
                        bookid="cUd2n6"
                        bookname="S L Arora"
                        description="Class XII Physics"
                        price="850"
                        author="S L Arora"
                        location="Dehradun"
                        category="Educational"
                        mode="Rent"
                        duration="1 Month"
                    ></BookInfo>
                </div>
                <div className="info-wrapper">
                <BookImage 
                        bookimage="https://5.imimg.com/data5/LE/BL/MY-11183377/half-girlfriend-500x500.png"
                ></BookImage>
                    <BookInfo 
                        bookid="d7Han3"
                        bookname="Half Girlfriend"
                        description="A Novel"
                        price="400"
                        author="Chetan Bhagat"
                        location="New Delhi"
                        category="Novel"
                        mode="Sell"
                        duration="-"
                    ></BookInfo>
                </div>
            </div>
        );
    }
}
 
export default BookDetails;
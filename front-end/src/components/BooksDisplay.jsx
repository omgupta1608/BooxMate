import React, { Component } from "react";
import Books from "../api_handlers/books";
import '../CSS/BooksDisplay.css';

class BooksDisplay extends Component {
  render() {
    return (
      
        <Books/>
      
    );
  }
}

export default BooksDisplay;

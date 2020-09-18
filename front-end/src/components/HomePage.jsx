import React, { Component } from 'react';
import Navbar from "./Navbar";
import Herobox from "./Herobox";
import Linkbox from "./Linkbox";
import BooksDisplay from "./BooksDisplay";

class HomePage extends Component {
    state = { books: [
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educal",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educanal",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educnal",
          location: "afkjbaskjb",
        },
      ], }
    render() { 
        return ( 
            <div className="App">
            <Navbar />
            <Herobox />
            <Linkbox />
            <BooksDisplay books={this.state.books}></BooksDisplay>
          </div>
         );
    }
}
 
export default HomePage;
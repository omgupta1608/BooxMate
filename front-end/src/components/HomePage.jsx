import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Herobox from "./Herobox";
import Linkbox from "./Linkbox";
import BooksDisplay from "./BooksDisplay";

class HomePage extends Component {
  state = {
    books: [ ],
    user: {}
  };
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

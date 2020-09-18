import React, { Component } from "react";
import BookCard from "./BookCard";

class BooksDisplay extends Component {
  render() {
    return (
      <div>
        <div className="booksdisplay">
          <div className="heading">
            <h4>Category: Novel</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All
            </a>
          </div>
          <div className="content">
            {this.props.books.map((book) => (
              <BookCard
                location={book.location}
                bookname={book.bookname}
                postdate={book.postdate}
                price={book.price}
              ></BookCard>
            ))}
            {/* <BookCard />
            <BookCard />
            <BookCard /> */}
          </div>
        </div>
        <div className="booksdisplay">
          <div className="heading">
            <h4>Category: Educational</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All
            </a>
          </div>
          <div className="content">
            {this.props.books.map((book) => {
              if (book.category === "Educational") {
                return (
                  <BookCard
                    location={book.location}
                    bookname={book.bookname}
                    postdate={book.postdate}
                    price={book.price}
                  ></BookCard>
                );
              }
            })}
            {/* <BookCard />
            <BookCard />
            <BookCard /> */}
          </div>
        </div>
        <div className="booksdisplay">
          <div className="heading">
            <h4>Category: Novel</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All
            </a>
          </div>
          <div className="content">
            {this.props.books.map((book) => (
              <BookCard
                location={book.location}
                bookname={book.bookname}
                postdate={book.postdate}
                price={book.price}
              ></BookCard>
            ))}
            {/* <BookCard />
            <BookCard />
            <BookCard /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default BooksDisplay;

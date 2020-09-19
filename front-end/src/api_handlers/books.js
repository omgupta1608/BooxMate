import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import BookCard from '../components/BookCard';

export const GET_ALL_BOOKS = gql`
  query {
    books {
      bookid
      bookname
      bookdescription
      bookimage
      category
      price
      mode
      duration
      author
      publisher
      edition
      requestcount
      issold
      postdate
    }
  }
`;

export default () => (
  <Query query={GET_ALL_BOOKS}>
    {({ loading, data }) =>
      !loading && (
        <div className="bookswrap">
          {data.books.map((book) => (
            <BookCard
                bookname={book.bookname}
                bookid={book.bookid}
                location={book.location}
                price={book.price}
                postdate={book.postdate}
            ></BookCard>
          ))}
        </div>
      )
    }
  </Query>
);

import React, {Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import BookCard from "../components/BookCard";

export const GET_ONE_BOOKS = gql`
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
class OneBook extends Component{
    render(){
        return(
            <Query query={GET_ONE_BOOKS}>
            {({ loading, data }) =>
              !loading && (
                <div className="bookswrap">
                  {data.books.map((book) => {
                    if (book.bookid === this.props.bookid) {
                      return (<BookCard
                        bookname={book.bookname}
                        bookid={book.bookid}
                        location={book.location}
                        price={book.price}
                        postdate={book.postdate}
                      ></BookCard>)
                    }
                  })}
                </div>
              )
            }
          </Query>
        )
    }
}
export default OneBook
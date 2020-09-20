import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_ALL_ANSWERS = gql`
  query {
    answers {
      answerid
      answer
      answerdate
      hearts
    }
  }
`;
class AllAnswers extends Component {
  state = {};
  render() {
    return (
      <Query query={GET_ALL_ANSWERS}>
        {({ loading, data }) =>
          !loading && (
            <div>
              <center>
                {data.answers.map((answer) => (
                  <h2> {answer.answer}</h2>
                ))}
              </center>
            </div>
          )
        }
      </Query>
    );
  }
}

export default AllAnswers;

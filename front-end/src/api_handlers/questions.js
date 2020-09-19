import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Question from '../components/Question';

export const GET_ALL_QUESTIONS = gql`
  query {
    questions {
        questionid
        title
        description
        answerscount
        askdate
        isClosed
        category
    }
  }
`;

export default () => (
  <Query query={GET_ALL_QUESTIONS}>
    {({ loading, data }) =>
      !loading && (
        <div className="recent-ques">
          
          {data.questions.reverse().map((question) => (
            <Question
                questionid={question.questionid}
                title={question.title}
                answerscount={question.answerscount}
            ></Question>
          ))}
        </div>
      )
    }
  </Query>
);

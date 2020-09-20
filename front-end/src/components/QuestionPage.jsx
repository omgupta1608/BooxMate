import React, { Component } from 'react';
import Question from './Question';
import AllAnswers from '../api_handlers/answers';

class QuestionPage extends Component {
    state = {  }
    render() { 
        return (
            <div>  
                  <div className="question">
                <p className="ques">Which is best Fantasy Book to read</p>
                <p className="count">4 Answer(s)</p>
               </div>
            <AllAnswers/>
            </div>
        );
    }
}
 
export default QuestionPage;
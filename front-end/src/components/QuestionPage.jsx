import React, { Component } from 'react';
import Question from './Question';
import AllAnswers from '../api_handlers/answers';

class QuestionPage extends Component {
    state = {  }
    render() { 
        return (
            <div>  
            <Question/>
            <AllAnswers/>
            </div>
        );
    }
}
 
export default QuestionPage;
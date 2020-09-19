import React, { Component } from 'react'
import Question from './Question'
import AllQuestions from '../api_handlers/questions';
export class RecentQues extends Component {
    render() {
        return (
            <div className="recent-ques">
                <AllQuestions/>
            </div>
        )
    }
}

export default RecentQues

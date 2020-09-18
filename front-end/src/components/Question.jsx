import React, { Component } from 'react'

export class Question extends Component {
    render() {
        return (
            <div className="question">
                <p className="ques">Q. Which is the best book to learn JavaScript?</p>
                <small>No of Answers: 3</small>
                <p className="ans">Ans. You can learn javascript from HeadFirst javascript book.</p>
                <button className="give-answer">Submit your Answer</button>
            </div>
        )
    }
}

export default Question

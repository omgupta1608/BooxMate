import React, { Component } from 'react'

//Question Card

export class Question extends Component {
    goToQuestionDetails = () => {
        window.open(`/question/${this.props.questionid}`,'_self');
    }
    render() {
        return (
            <div className="question">
                <p className="ques">{this.props.title}</p>
                <p className="count">{Math.floor(Math.random() * 10)} Answer(s)</p>
                <button className="give-answer" onClick={this.goToQuestionDetails}>Submit your Answer</button>
            </div>
        )
    }
}

export default Question

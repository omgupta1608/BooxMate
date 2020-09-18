import React, { Component } from 'react'

export class QuestionInput extends Component {
	render() {
		return (
			<div className="question-input">
					<input className="question-input-box" type="text" name="QuestionInput" id="question-input" placeholder="Having a Question?" />
					<input className="submit-ques" type="submit" value="Submit" />
			</div>
		)
	}
}

export default QuestionInput

import React, { Component } from 'react'
import axios from 'axios';
export class QuestionInput extends Component {

	postQuestion = async () => {
		var question = document.getElementById('question-input').value;
		var response = await axios.post('http://localhost:4680/api/question/add-question', { title: question, description: ' ' }).then(function (response) {
			document.getElementById('question-input').value = '';
			window.open('/CommunityForum','_self');
			console.log(response);
		});
	}
	render() {
		return (
			<div className="question-input">
					<input className="question-input-box" type="text" name="QuestionInput" id="question-input" placeholder="Having a Question?" />
					<input className="submit-ques" value="Submit" type="submit" onClick={this.postQuestion} />
			</div>
		)
	}
}

export default QuestionInput

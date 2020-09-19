import React, { Component } from 'react'
import axios from 'axios';

export class SellRentForm extends Component {
	mode = 'sell'
	file = null;
	async postBook(){
		//document.getElementById('bookimage').addEventListener("onChange", () => { this.file = event.target.files[0];});
		var name = document.getElementById('bookname').value;
		var author = document.getElementById('bookauthor').value;
		var category = 'Novel'
		var location = document.getElementById('location').value;
		var mode = 'sell';
		var price = document.getElementById('bookprice').value;
		//var bookimage = document.getElementsById('bookimage').files[0];

		var data = {
			bookname: name,
			author: author,
			category: category,
			location: location,
			mode: mode,
			price: price,
			bookimage: null
		}
		console.log(data);
		var response = await axios.post('http://localhost:4680/api/book-2/add-book', data).then(function (response) {
			//document.getElementById('question-input').value = '';
			//window.open('/','_self');
			console.log(response);
		});

	}
	render() {
		return (
			<div className="sell-rent-form">
				<div className="form">
					<h2>
						Please fill the form below:
					</h2>
					<input type="text" id="bookname" placeholder="Title of the Book" />
					<input type="text" id="bookauthor" placeholder="Name of the author" />
					<select name="category" id="" placeholder="Category">
						<option value="default">Category</option>
						<option value="Novel">Novel</option>
						<option value="Educational">Educational</option>
						<option value="Kids">Kids</option>
						<option value="Other">Other</option>
					</select>
					<input type="text" id="location" placeholder="Your Location (State/City)" />
					<p>What you want to do?</p>
					<div className="radio-wrapper">
						<input onClick={this.myfunction} className="sellradio" type="radio" name="radio" id="sellradio" />
						<label htmlFor="sell-radio">Sell</label>
						<input onClick={this.myfunction1} className="rentradio" type="radio" name="radio" id="rentradio" />
						<label htmlFor="rent-radio">Rent</label>
					</div>
					<p>Upload an image of Book: </p>
					<input type="file" itemID="bookimage" id="bookimage" accept="image/*"  />
					{/* <input type="text" name="bookmrp" id="" placeholder="M.R.P of the Book" /> */}
					<input type="text" id="bookprice" placeholder="Price of the Book" />
					{/* <input id="rent-only" type="text" name="rent-duration" placeholder="Duration of the Renting period" />
					<input id="rent-only1" type="text" name="security-deposit" placeholder="Amount of Security deposit" /> */}
					<input className="submit" type="submit" value="Submit" onClick={this.postBook}/>
					</div>
			</div>
		)
	}
}

export default SellRentForm

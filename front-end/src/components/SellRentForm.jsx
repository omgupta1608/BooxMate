import React, { Component } from 'react'

export class SellRentForm extends Component {
	
	myfunction() {
		document.getElementById("rent-only").style.display='none'
		document.getElementById("rent-only1").style.display='none'
	}

	myfunction1() {
		document.getElementById("rent-only").style.display='block'
		document.getElementById("rent-only1").style.display='block'
	}
	
	render() {
		return (
			<div className="sell-rent-form">
				<form action="#">
					<h2>
						Please fill the form below:
					</h2>
					<input type="text" name="name" placeholder="Your Name" />
					<input type="text" name="bookname" placeholder="Title of the Book" />
					<input type="text" name="bookauthor" placeholder="Name of the author" />
					<select name="category" id="">
						<option value="default">Category</option>
						<option value="Novel">Novel</option>
						<option value="Educational">Educational</option>
						<option value="Kids">Kids</option>
						<option value="Other">Other</option>
					</select>
					<input type="text" name="location" placeholder="Your Location (State/City)" />
					<div className="radio-wrapper">
						<input onClick={this.myfunction} className="sellradio" type="radio" name="radio" id="sellradio" />
						<label htmlFor="sell-radio">Sell</label>
						<input onClick={this.myfunction1} className="rentradio" type="radio" name="radio" id="rentradio" />
						<label htmlFor="rent-radio">Rent</label>
						<input type="file" name="bookimage" id="bookimage" accept="image/*" />
					</div>
					<input type="text" name="bookmrp" id="" placeholder="M.R.P of the Book" />
					<input type="text" name="bookprice" id="" placeholder="Price of the Book" />
					<input id="rent-only" type="text" name="rent-duration" placeholder="Duration of the Renting period" />
					<input id="rent-only1" type="text" name="security-deposit" placeholder="Amount of Security deposit" />
					<input className="submit" type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default SellRentForm

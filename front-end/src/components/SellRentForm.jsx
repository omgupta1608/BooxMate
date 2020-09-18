import React, { Component } from 'react'

export class SellRentForm extends Component {
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
						<input className="sellradio" type="radio" name="radio" id="" />
						<label htmlFor="sell-radio">Sell</label>
						<input className="rentradio" type="radio" name="radio" id="" />
						<label htmlFor="rent-radio">Rent</label>
					</div>
					<input type="text" name="bookmrp" id="" placeholder="M.R.P of the Book" />
					<input type="text" name="bookprice" id="" placeholder="Price of the Book" />
					<input type="text" name="rent-duration" placeholder="Duration of the Renting period (Skip if you are selling your book)" />
					<input type="text" name="security-deposit" placeholder="Amount of Security deposit (Skip if you are selling your book)" />
					<input className="submit" type="submit" value="Submit" />
				</form>

			</div>
		)
	}
}

export default SellRentForm

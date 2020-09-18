import React, { Component } from 'react';
import Navbar from './Navbar'
import SellRentForm from './SellRentForm'
import '../SellRent.css'
//buy
class SellRent extends Component {
	state = {}
	render() {
		return (
			<div className="sell-rent">
				<Navbar />
				<SellRentForm />
			</div>
		);
	}
}

export default SellRent;
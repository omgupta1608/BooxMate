import React, { Component } from 'react'
import '../CSS/Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class Navbar extends Component {
    state = {  }
    goToCart = () => {
        window.open('/cart', '_self');
    }
    goToSearch = () => {
        window.open('/search', '_self');
    }
    updateUI = () => {
        // const { loginWithRedirect } = useAuth0();
        // const {user, isAuthenticated} = useAuth0();

        // if(isAuthenticated){
        //     <LogoutButton/>
        // }else{
        //     <LoginButton/>
        // }

    }
    render() { 
    
      return(  
        <div className="navbar">
        <h1>BOOXMATE</h1>
        <input type="text" name="search" id="search" placeholder="Search for a Book..." />
        <i className="fas fa-search" onClick={this.goToSearch}></i>
        <div className="btn">
            <button className="btn-cart" onClick={this.goToCart}>Cart</button>
            {this.updateUI()}
        </div>
        
    </div>
    ); 
    }
}
 


export default Navbar

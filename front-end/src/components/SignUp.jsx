import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <h1>BOOXMATE</h1>
                <form action="" method="post">
                    <h3>Sign Up</h3>
                    <input type="text" name="username" id="username" placeholder="Enter you name"/>
                    <input type="number" name="mobile" id="mobile" placeholder="Enter your mobile number"/>
                    <input type="email" name="email" id="email" placeholder="Enter your email address"/>
                    <input type="password" name="password" id="password" placeholder=" Create a password"/>
                </form>
                <p>Already have an account? <a href="/SignIn">Sign In here</a></p>
            </div>
        )
    }
}

export default SignUp

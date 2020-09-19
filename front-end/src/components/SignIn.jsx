import React, { Component } from 'react'

export class SignIn extends Component {
    render() {
        return (
            <div className="signin">
                <h1>BOOXMATE</h1>
                <form action="" method="post">
                    <h3>Sign In</h3>
                    <input type="email, number" name="" id=""/>
                </form>
                <p>New User? <a href="/SignUp">SignUp here</a></p>
            </div>
        )
    }
}

export default SignIn

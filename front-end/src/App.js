import React, { Component } from "react";
import "./App.css";
// Importing components
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Test1 from "./components/SellRent";
import CommunityForum from "./components/CommunityForum";
import SellRent from "./components/SellRent";
import HomePage from "./components/HomePage";
import DemoBook from "./components/DemoBook";
import Books from "./api_handlers/books";
import SignUp from './components/SignUp';
import Profile from './components/Profile';
class App extends Component {
  state = {};

  // App() {
  //   return (
  //     <>
  //       <LoginButton />
  //       <LogoutButton />
  //     </>
  //   );
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Switch>
         <Route path='/bookDetails/(:any)' component={SignUp}></Route>
         <Route path='/' component={HomePage}></Route>
         <Route path='/cart' component={Profile}></Route>
         <Route path='/search' component={Profile}></Route>
         </Switch>
        <HomePage/>                                                                                                                                                                                                             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

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
import Cart from './components/BookDetails';
import Profile from './components/Profile';
import BookDetails from './components/BookDetails';
import QuestionInput from './components/QuestionInput';
import QuestionPage from './components/QuestionPage';
import Search from './components/Search';
class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route path='/bookDetails/' component={Cart}></Route>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/Cart' component={Cart}></Route>
            <Route path='/Search' component={Search}></Route>
            <Route path='/Profile' component={Profile}></Route>
            <Route path='/SellRent' component={SellRent}></Route>
         <Route path='/CommunityForum' exact component={CommunityForum}></Route>
         <Route path='/DemoBook' exact component={DemoBook}></Route>
         <Route path='/' exact component={HomePage}></Route>
          <Route path='/question' component={QuestionPage}></Route>
          <Route path='/communityforum' component={CommunityForum}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

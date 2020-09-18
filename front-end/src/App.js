import React, { Component } from "react";
import "./App.css";
// Importing components
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test1 from "./components/SellRent";
import CommunityForm from "./components/CommunityForm";
import SellRent from "./components/SellRent";
import HomePage from "./components/HomePage";
import DemoBook from "./components/DemoBook";


class App extends Component {
  state = {
    
  };
  render() {
    return (
      <BrowserRouter>
          <div className="content">
            <Switch>
              <Route  path="/" exact component={HomePage}></Route>
              <Route  path="/CommunityForm" exact component={CommunityForm}></Route>
              <Route  path="/DemoBook" exact component={DemoBook}></Route>
              <Route  path="/SellRent" exact component={SellRent}></Route>
            </Switch>
          </div>
      
      </BrowserRouter>
    );
  }
}

export default App;

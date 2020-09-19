import React, { Component } from "react";
import '../CSS/Linkbox.css'
import { Link } from "react-router-dom";
import sell_book from "../images/sell-book.png";
import community_forum from "../images/community.png";
import demo_book from "../images/add-book.png";

//Sell-Community-Demo cards
//hi

class Linkbox extends Component {
  toSellRent = () => {
    window.open("/SellRent", "_self");
  };

  toCommunityForm = () => {
    window.open("/CommunityForum", "_self");
  };

  toDemoBook = () => {
    window.open("/DemoBook", "_self");
  };

  render() {
    return (
      <div className="link-box">
        <div className="link-box-heading">
          {/* <Link to="/Test1">
                    Test1
                </Link> */}
          <p>What do you want to do?</p>
        </div>

        <div className="link-box-content">
          <div className="link_sell" onClick={this.toSellRent}>
            <img src={sell_book} alt="" />

            <p>Sell/Rent a Book</p>
          </div>

          <div className="link_community" onClick={this.toCommunityForm}>
            <img src={community_forum} alt="" />
            <p>Visit Community Forum</p>
          </div>

          <div className="link_demo" onClick={this.toDemoBook}>
            <img src={demo_book} alt="" />
            <p>Publish a Demo of your book</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Linkbox;

import React from 'react'
import sell_book from '../images/sell-book.png'
import community_forum from '../images/community.png'
import demo_book from '../images/add-book.png'

const Linkbox = () => {
    return (
        <div className="link-box">
            <div className="link-box-heading">
                <p>
                    What do you want to do?
                </p>
            </div>
            <div className="link-box-content">
                <div className="link_sell">
                    <img src={sell_book} alt=""/>
                    <p>Sell/Rent a Book</p>
                </div>
                <div className="link_community">
                    <img src={community_forum} alt=""/>
                    <p>Visit Community Forum</p>
                </div>
                <div className="link_demo">
                    <img src={demo_book} alt=""/>
                    <p>Publish a Demo of your book</p>
                </div>
            </div>
        </div>
    )
}

export default Linkbox

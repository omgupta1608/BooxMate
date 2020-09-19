import React, { Component } from 'react';
import '../CSS/CommunityForum.css'
import Navbar from './Navbar'
import QuestionInput from './QuestionInput'
import RecentQuestion from './RecentQues'

class CommunityForum extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="community-forum">
                <Navbar />
                <QuestionInput />
                <RecentQuestion />
            </div>
         );
    }
}
 
export default CommunityForum;
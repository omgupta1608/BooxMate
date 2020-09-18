import React, { Component } from 'react';
import '../Views/CommunityForum.css'
import Navbar from './Navbar'
import QuestionInput from './QuestionInput'
import RecentQuestion from './RecentQues'

class CommunityForum extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <QuestionInput />
                <RecentQuestion />
            </div>
         );
    }
}
 
export default CommunityForum;
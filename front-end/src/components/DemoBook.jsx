import React, { Component } from 'react';

class DemoBook extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="demobook">
                {/* <h1>Demo Book</h1>
                file
                name
                booktitle
                description
                category */}
                <form action="" method="post">
                    <input type="text" name="user" id="user" placeholder="Your name" />
                    <input type="text" name="title" id="title" placeholder="Book Title" />
                    <input type="file" name="file" id="file" />
                </form>
            </div>
         );
    }
}
 
export default DemoBook;
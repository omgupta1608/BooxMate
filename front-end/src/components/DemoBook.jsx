import React, { Component } from 'react';
import '../CSS/DemoBook.css'

class DemoBook extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="demobook">
                <form className="demo" action="" method="post">
                    <h2>Please fill the form below: </h2>
                    <input type="text" name="user" id="user" placeholder="Your name" />
                    <input type="text" name="title" id="title" placeholder="Book Title" />
                    <p>Upload the PDF file: </p> 
                    <input type="file" name="file" id="file" />
                    <input type="text" name="description" id="description" placeholder="Description about the book.(Max 100 words)" />
                    <input className="submit" type="submit" value="Submit"/>
                </form>
            </div>
         );
    }
}
 
export default DemoBook;
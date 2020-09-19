import React, { Component } from 'react';
import axios from 'axios'
import Navbar from "./Navbar";
import Herobox from "./Herobox";
import Linkbox from "./Linkbox";
import BooksDisplay from "./BooksDisplay";
//hello
class HomePage extends Component {
    state = { books: [
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educational",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educal",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educanal",
          location: "afkjbaskjb",
        },
        {
          price: 32,
          postdate: "afasf",
          bookname: "aasaf",
          category: "Educnal",
          location: "afkjbaskjb",
        },
      ], }

     async componentDidMount() {
        // await Axios(
        //   'http://localhost:3200',{
        //     method: 'GET',
        //     data: {
        //       query: `{
        //       books{
        //         bookid
        //         bookname
        //         price
        //         author
        //       }}
        //       `
        //     },
        //     headers: {
        //       'Content-Type': "application/graphql",
        //       "Access-Control-Allow-Origin": "*"
        //     }
        //   }
        // ).then(res => res.json()).then(json => console.log(json));

        // axios({
        //   method: 'get',
        //   url:'http://localhost:3200/graphql',
        //   headers: {          }, 
        //   data: {
        //     query: `{
        //       query books{
        //         bookid
        //         bookname
        //         price
        //         author
        //       }
        //     }`
        //   }
        // }).then(json => console.log(json));
        var response = await axios.get("http://localhost:4640/api/books",{
          data: {
                 query: `{
                 query books{
                     bookid
                    bookname
                    price
                    author
                }
                }`
          },
          headers: {
            'Content-Type': "application/json"
          }
        });
        console.log(response);
      }

    render() { 
        return ( 
            <div className="App">
            <Navbar />
            <Herobox />
            <Linkbox />
            <BooksDisplay books={this.state.books}></BooksDisplay>
          </div>
         );
    }
}
 
export default HomePage;
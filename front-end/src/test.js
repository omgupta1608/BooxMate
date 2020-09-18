// import React, { Component } from "react";
// import "./App.css";
// import NavBar from "./components/navBar";
// import Counters from "./components/counters";
// import { render } from "@testing-library/react";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//       { id: 5, value: 0 },
//       { id: 6, value: 0 },
//     ],
//   };
  
//   handleIncrement = (id) => {
//     // console.log("Increment Clicked", this.state);
//     this.setState({ 
//       //value: this.state.value + 1 
//         counters: this.state.counters.map(rishi)
//     });
//     //Direct increment ++ doesnt work in react
//   };

//   handleDelete = (counterId) => {
//     console.log("Event Handler is Called");
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters: counters });
    
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar></NavBar>
//         <Counters
//           counters={this.state.counters}
//           onIncrement={this.handleIncrement}
//           onDelete={this.handleDelete}
//         ></Counters>
//       </React.Fragment>
//     );
//   }
// }

// export default App;


// ***************************8

// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
 

//   render() {
//     return (
    
//       <div>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement = {this.props.onIncrement}
//             value={counter.value}
//             id = {counter.id}
//           >
//             <h3>Count #{counter.id} </h3>
//           </Counter>
//         ))}
//       </div>
//     );
//   }
//   //****We raised an event-Delete Btn from children class to parent class
//   //Since array where deletion is to be performed is here
// }

// export default Counters;

// ******************************

// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     value: this.props.value,
//     tags: ["tag1", "tag2", "tag3"],
//   }; //state is a special property in React component
//   //It includes any data that component needs

//   //   styles = {
//   //       fontSize = 10,                 //We used inline style here
//   //       fontWeight = "bold"
//   //   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>No Value in Array Tags</p>;
//   }

//   //Normal Function will not be able to get value of "this" 
  
//   //****When we need argument to be passed */
//   // doHandleIncrement = () => {
//   //     this.handleIncrement({id : 1}); 
//   // }
//   //Used inline Function

//   render() {
    
//     console.log(this.props);
//     let classes = "badge m-2 ";
//     classes += this.state.value === 0 ? "badge-warning" : "badge-primary";

//     return (
//       <React.Fragment>
//         {this.props.children}
//         <span className={classes}>{this.formatCount()} </span>
//         <button
//           onClick={ () => this.props.onIncrement() } //adasd
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>

//         <button
//          onClick={ () => this.props.onDelete (this.props.id ) } className="btn btn-danger btm-sm m-2">Delete</button>
        
//         {this.renderTags()}

//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//     //These jsx terms run through React.createElement
//   } //Value returns to index.js

//   // getBadgeClasses() {
//   //   let classes = "badge m-2 badge-";
//   //   classes += this.state.count === 0 ? "warning" : "primary";
//   // }

//   formatCount() {
//     let { value: count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }


// export default Counter;

// //***Specifying children ***
// // <h1>Hello World </h1><button>Increment<butotn> NOT ALLOWED
// //Bable cant compile 2 components side by side

// //***Setting Attributes ***
// //we can set imageUrl:"https://picsum.photos/200" imn state to produce some random image
// //

// //****Rendering Classes Dynamically****
// //Changing color of heading with different conditions
// //In render function
// //let classes = "badge m-2 badge-"
// //classes+= this.state.count === 0 : "warning" ? "primary"
// //Up in prog we used another function for this

// //****Rendering Lists ****
// //Use Array Map method

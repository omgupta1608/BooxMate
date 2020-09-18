import React from 'react';
import './App.css';
// Importing components
import Navbar from './components/Navbar';
import Herobox from './components/Herobox'
import Linkbox from './components/Linkbox'
import BooksDisplay from './components/BooksDisplay'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobox />
      <Linkbox />
      <BooksDisplay />
    </div>
  );
}

export default App;

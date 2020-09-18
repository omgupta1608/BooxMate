import React from 'react';
import './App.css';
// Importing components
import Navbar from './components/Navbar';
import Herobox from './components/Herobox'
import Linkbox from './components/Linkbox'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobox />
      <Linkbox />
      Hello World!!!
    </div>
  );
}

export default App;

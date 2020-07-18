import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import NewTask from './components/NewTask.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <NewTask />
    </div>
  );
}

export default App;

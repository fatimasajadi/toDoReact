import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import NewTask from './components/NewTask.js';
import Task from './components/Task';


function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <div className="App">
        <Nav />
        <NewTask onSubmit={setTask} />
      </div>
      <Task task={task} />
    </>
  );
}

export default App;

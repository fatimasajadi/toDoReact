import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import NewTask from './components/NewTask.js';
import Tasks from './components/Tasks';


function App() {
  const [task, setTask] = useState([]);

  return (
    <>
      <div className="App">
        <Nav />
        <NewTask
          onSubmitTask={(newTask) => {
            setTask([...task, newTask])
          }}
        />
      </div>
      <Tasks task={task} />
    </>
  );
}

export default App;

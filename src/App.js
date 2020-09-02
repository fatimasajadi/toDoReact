import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import NewTask from './components/NewTask.js';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([]);

  function onDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="App">
        <Nav />
        <NewTask
          onSubmitTask={(newTask) => {
            setTasks([...tasks, newTask])
          }}
        />
      </div>
      <Tasks
        tasks={tasks}
        onSubmitTask={(newTask) => {
          setTasks([...tasks, newTask])
        }}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;

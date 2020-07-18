import React from 'react';
import './NewTask.css';

function NewTask() {
  return (
    <div className='new-task-container'>

      <form className="new-task-form" >
        <textarea className="new-task-textarea" name="text" placeholder="What is your next task?" autofocus></textarea>
        <button className="create-new-task-button" type="submit"> CREATE TASK </button>
      </form>

    </div>
  );
}

export default NewTask;

import React, { useState } from 'react';
import './NewTask.css';

function NewTask(props) {
  const [value, setValue] = useState('');

  return (
    <div className='new-task-container'>

      <form className="new-task-form" onSubmit={event => event.preventDefault()} >
        <textarea
          className="new-task-textarea"
          name="text"
          placeholder="What is your next task?"
          autoFocus
          onChange={(event) => { setValue(event.target.value) }}
          value={value}
        />
        <button
          className="create-new-task-button"
          type="submit"
          onClick={() => {
            props.onSubmit(value);
            setValue('');
          }}
        >
          CREATE TASK
        </button>
      </form>

    </div>
  );
}

export default NewTask;

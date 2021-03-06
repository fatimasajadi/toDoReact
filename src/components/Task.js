import React from 'react';
import './Task.css';

function Task(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onclick();
  }

  return (
    <>
      <div className="task-container">
        <div className="icon">
          <div className="check-mark">
            <a className="fa fa-square-o" href="#"></a>
            <p>{props.task}</p>
          </div>
          <div className="edit-trash">
            <a className="fa fa-edit" href="#"></a>
            <a className="fa fa-trash" href="#"
              onClick={handleClick}
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;

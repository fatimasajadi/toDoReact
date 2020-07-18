import React from 'react';
import './nav.css';

function Nav() {
  return (
    <>
      <span className="nav">
        <div className='pink'></div>
        <div className='blue'></div>
        <div className="new-task-div">
          <p className="nav-text">Create New Task</p>
          <div className="arrow bounce">
            <a className="fa fa-angle-double-down" href="#"></a>
          </div>
        </div>

      </span>
    </>
  );
}

export default Nav;

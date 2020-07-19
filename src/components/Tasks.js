import React from "react";
import "./Tasks.css";
import Task from "./Task.js";
import "./Task.css";

export default function Tasks(props) {
  return (
    props.task.map((item) => {
      return (
        <Task
          task={item}
        />
      )
    })

  );
}

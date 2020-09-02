import React from "react";
import "./Tasks.css";
import Task from "./Task.js";
import "./Task.css";

export default function Tasks(props) {

  return (
    props.tasks.map((item, index) => {
      return (
        <Task
          key={index}
          task={item}
          onclick={() => props.onDelete(index)}
        />
      )
    })

  );
}

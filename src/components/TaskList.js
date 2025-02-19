import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleList }) {


  return (
    <div className="tasks">
        {tasks.map(task => <Task key={task.text} text={task.text} category={task.category} taskHandler={handleList} />)}
    </div>
  );
}

export default TaskList;

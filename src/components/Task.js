import React from "react";

function Task( { taskData , taskHandler}) {

  function handleTasks(event){
    const value = event.target.value
    taskHandler(value)

  }
 
  return (
        <div className="task" key={taskData.text}>
          <div className="label">{taskData.category}</div>
          <div className="text">{taskData.text}</div>
          <button className="delete" onClick={handleTasks} value={taskData.text}>X</button>
        </div>
  )
}

export default Task;

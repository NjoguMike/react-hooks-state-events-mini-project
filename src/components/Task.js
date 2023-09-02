import React from "react";

function Task( { text, category , taskHandler}) {

  function handleTasks(event){
    const value = event.target.value
    taskHandler(value)

  }
  
  return (
        <div className="task" key={text}>
          <div className="label">{category}</div>
          <div className="text">{text}</div>
          <button className="delete" onClick={handleTasks} value={text}>X</button>
        </div>
  )
}

export default Task;

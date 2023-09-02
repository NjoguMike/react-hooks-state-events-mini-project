import React , { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit }) {
  const [ task, setTask ]  = useState({text:"",category:""})

  const option = categories.map(category => category === "All" ? null : <option key={category} value={category}>{category}</option>)

  function handleCHange(event){
    const name = event.target.name
    const value = event.target.value

  setTask({
    ...task,
    [name]:value
  })
  }

  return (
    <form className="new-task-form" onSubmit={(e)=>{e.preventDefault(); onTaskFormSubmit(task)}}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={handleCHange}/>
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleCHange}>
          {option}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App(){

const [ data, setData ] = useState(TASKS)
const [ cate, setCate] = useState("")
  
  function handleFilter(btndata){
    const update = data.filter(item => item.text !== btndata)
    setData(()=>update)
  } 

  function handleData(displayData){

    const task = TASKS.filter(task => { if( displayData !== "All"){
      return task.category === displayData} 
      else {
        return task }
      })

      // console.log(displayData)
      setData(()=>task)  
      setCate(()=>displayData)
  
  }

  function handleForm(newTask){
    const newItems = [...data, newTask]
    setData(()=> newItems.filter(item => item !== ""))
    
  }

// console.log(data)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCate={handleData} catego={cate}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleForm}/>
      <TaskList tasks={data} handleList={handleFilter} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import todoListArr from '../../../assests/todoList.json';
import "./todo.style.css"

function Todo() {

  const [toDoList, setToDoList] = useState([]);
  const [inputVal, setInputVal] = useState('');


  useEffect(() => {
    setToDoList(todoListArr);
  }, [])

  const toggleDone = (id) => {
    const updatedList = toDoList.map(v => {
      if(v.id === id){
        return {...v, deleted: !v.deleted}
      }
      return v;
    });
    setToDoList(updatedList);
  }

  const setTaskVal = (event) => {
    setInputVal(event.target.value);
  }
  const addTask = () => {
    if(inputVal){
      setToDoList([...toDoList, {
        id: toDoList.length + 1,
        task: inputVal,
        deleted: false
      }])
    }
  }

  return (
    <main className="todo">
      <h1>Your Vapasi Task</h1>
      <ul>
      {toDoList.map(val => (

        <li key={val.id} onClick={() => toggleDone(val.id)}>
          <input data-testid={val.id} onChange={() => {}} checked={val.deleted} id={val.id} type="checkbox"/>
          <label  htmlFor={val.id} >{val.task}</label>
        </li>
        )
      )}
      </ul>
      <section data-testid= "addTask">
        <input onChange={setTaskVal} placeholder="add task" className="add-task" type="text"/>
        <button onClick={addTask} type="button">Add</button>
      </section>
    </main>
  )
}

export default Todo

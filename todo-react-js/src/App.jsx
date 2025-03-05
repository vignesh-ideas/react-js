import React, { useState, useCallback } from "react";
import "./style.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = useCallback(() => {
    if (task.trim()) {
      setTasks([...tasks, { name: task, completed: false }]);
      setTask("");
    }
  }, [task, tasks]);

  const deleteTask = useCallback(
    (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    }, [tasks]);

  const toggleTask = useCallback(
    (index) => {
      setTasks(
        tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        )
      );
    }, [tasks]);

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div className="add-list-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add To Do"
        />
        <button id="todo-add" onClick={addTask}>
          ADD
        </button>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="list-container">
          <button
            id="todo-list"
            className={task.completed ? "strike-decoration" : ""}
            onClick={() => toggleTask(index)}> {task.name}            
          </button>
          <button id="todo-delete" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoApp;


import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Header from "./Header";
import axios from "axios";
import AppContextProvider from "./app-context";

const APP_URL = "http://localhost:8080/todo";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get(APP_URL)
      .then(response => {
        setTasks(response.data.slice(0, 10));
      })
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = useCallback(() => {
    if (task.trim()) {
      axios.post(APP_URL, { name: task, completed: false })
        .then(response => {
          setTasks([...tasks, response.data]);
          setTask("");
        })
        .catch(error => console.error("Error adding task:", error));
    }
  }, [task, tasks]);

  const deleteTask = useCallback((index) => {
    const taskToDelete = tasks[index];
    axios.delete(`${APP_URL}/${index}`)
      .then(() => {
        setTasks(tasks.filter((_, i) => i !== index));
      })
      .catch(error => console.error("Error deleting task:", error));
  }, [tasks]);

  const toggleTask = useCallback((index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    axios.put(`${APP_URL}/${index}`, updatedTask)
      .then(response => {
        setTasks(tasks.map((task, i) => (i === index ? response.data : task)));
      })
      .catch(error => console.error("Error updating task:", error));
  }, [tasks]);

  return (
    <div className="container">
      {/* <AppContextProvider> */}
        <Header />
        <TaskInput task={task} setTask={setTask} addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      {/* </AppContextProvider> */}
    </div>
  );
};

export default ToDoApp;


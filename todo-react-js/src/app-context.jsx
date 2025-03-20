import React, { useState, useCallback, createContext } from "react";
import "./style.css";
import axios from "axios";

const APP_URL = "http://localhost:8080/todo";

export const AppContext = createContext({});

const AppContextProvider = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

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

  return <AppContext.Provider value={{
    tasks,
    task,
    addTask,
    deleteTask,
    toggleTask
  }}></AppContext.Provider>;
};

export default AppContextProvider;


import React, { useState, useCallback, createContext } from "react";
import axios from "axios";
import "./style.css";

const APP_URL = "http://localhost:8080/todo";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

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
    axios.delete(`${APP_URL}/${index}`)
      .then(() => {
        setTasks(tasks.filter((_, i) => i !== index));
      })
      .catch(error => console.error("Error deleting task:", error));
  }, [tasks]);

  const toggleTask = useCallback((index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }, [tasks]);

  return (
    <AppContext.Provider value={{
      isLoggedIn,
      login,
      logout,
      tasks,
      setTasks,
      task,
      setTask,
      addTask,
      deleteTask,
      toggleTask
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
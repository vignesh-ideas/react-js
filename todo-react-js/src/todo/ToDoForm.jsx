import React, { useEffect, useContext } from "react";
import "../common/style.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import ToDoHeader from "./ToDoHeader";
import axios from "axios";
import { AppContext } from "../common/app-context";
import Profile from "../common/Header";

const APP_URL = "http://localhost:8080/todo";

const ToDoForm = () => {
  
  const { tasks, setTasks, task, setTask, addTask, deleteTask, toggleTask } = useContext(AppContext);

  useEffect(() => {
    axios.get(APP_URL)
      .then(response => {
        setTasks(response.data.slice(0, 10));
      })
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <Profile />
      <div className="container">
          <ToDoHeader />
          <TaskInput task={task} setTask={setTask} addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default ToDoForm;


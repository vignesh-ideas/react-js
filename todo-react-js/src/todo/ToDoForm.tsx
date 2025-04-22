import React, { useEffect, useContext } from "react";
import "../common/style.css";
import TaskInput from "./TaskInput.tsx";
import TaskList from "./TaskList.tsx";
import ToDoHeader from "./ToDoHeader.tsx";
import axios from "axios";
import { AppContext } from "../common/app-context.tsx";
import Profile from "../common/Header.tsx";

const APP_URL = "http://localhost:8080/todo";

const ToDoForm = ({ }: any) => {
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
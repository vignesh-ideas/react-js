import { memo } from "react";
import "./style.css";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  console.log('list rerender---');
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default memo(TaskList);

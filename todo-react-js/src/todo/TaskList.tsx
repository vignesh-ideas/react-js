import React, { memo } from "react";
import "../common/style.css";
import TaskItem from "./TaskItem.tsx";

const TaskList = ({ tasks, toggleTask, deleteTask }: any) => {

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

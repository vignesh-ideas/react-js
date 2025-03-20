import "./style.css";

const TaskItem = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <div className="list-container">
      <button
        id="todo-list"
        className={task.completed ? "strike-decoration" : ""}
        onClick={() => toggleTask(index)}>
        {task.name}
      </button>
      <button id="todo-delete" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;

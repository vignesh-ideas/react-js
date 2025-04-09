import "../common/style.css";

const TaskInput = ({ task, setTask, addTask }) => {

  return (
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
  );
};

export default TaskInput;

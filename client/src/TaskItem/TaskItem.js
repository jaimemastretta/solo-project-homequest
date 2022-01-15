import "./TaskItem.css";

function TaskItem ({ task, removeTask }) {
  return <div className="task">
    <div className="task_status">
      <button onClick={() => removeTask(task._id)} className="task_status_btn"></button>
    </div>
    <div className="task_content">
      <h2 className="task_content_title">{task.title}</h2>
    </div>
    <div className="task_score">
      <h2 className="task_score_number">{task.score}</h2>
    </div>
  </div>
}

export default TaskItem;
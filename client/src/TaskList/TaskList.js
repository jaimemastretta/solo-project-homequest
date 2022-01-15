import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList ({ tasks, removeTask }) {
  return tasks.length ? tasks.sort((a, b) => b.score - a.score).map(task => <TaskItem removeTask={removeTask} task={task} key={task._id} />) : <p>No tasks!</p>;
}

export default TaskList;
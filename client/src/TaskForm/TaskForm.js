import "./TaskForm.css";
import { useState } from "react";

function TaskForm ({ addTask }) {
  const [ title, setTitle ] = useState("");
  const [ score, setScore ] = useState("");


  async function handleSubmit (event) {
    event.preventDefault();
    if (!title) return alert('Please enter chore');
    await addTask(title, score);
    setTitle('');
    setScore('');
  }

  function handleTitleChange (event) {
    setTitle(event.target.value);
  }
  function handleScoreChange (event) {
    setScore(event.target.value);
  }

  return <form className="taskForm" onSubmit={handleSubmit}>
    <input className="taskForm_title" value={title} onChange={handleTitleChange} type="text" placeholder="Write the title here..." />
    <input className="taskForm_score" value={score} onChange={handleScoreChange} type="number" placeholder="Enter score here" />
    <button className="taskForm_btn" type="submit">ADD</button>
  </form>
}
export default TaskForm;
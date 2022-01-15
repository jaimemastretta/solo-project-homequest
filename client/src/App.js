import './App.css';
import { useState, useEffect } from 'react';
import ApiService from './ApiService';
import TaskList from './TaskList/TaskList';
import TaskForm from './TaskForm/TaskForm';


function App() {

  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    ApiService.getTasks()
    .then(result => setTasks(result)) //TODO handle error with a catch method
    .catch(error => {
      return console.log('Error: ', error);
    })
  }, []);

  function addTask (title, score) {
    ApiService.postTask({ title, score })
    .then(task => setTasks(prev => [...prev, task]));
  }

  function removeTask (id) {
    ApiService.removeTask(id)
    .then(() => {
      setTasks(previous => previous.filter(task => task._id !== id));
    })
  }

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;

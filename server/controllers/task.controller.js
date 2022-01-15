const Task = require("../models/task.model");

async function getTasks (req, res) {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

async function addTask (req, res) {
  try {
    const { title, score } = req.body;
    const task = await Task.create({ title, score });
    res.status(201);
    res.send(task);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function removeTask (req, res) {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { 
  getTasks,
  addTask,
  removeTask
}
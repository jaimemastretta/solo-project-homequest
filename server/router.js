const router = require("express").Router();
const task = require("./controllers/task.controller");

router
  .get('/tasks', task.getTasks)
  .post('/tasks', task.addTask)
  .delete('/tasks/:id', task.removeTask)

module.exports = router;
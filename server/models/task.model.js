const { Schema } = require("mongoose");
const mongoose = require("./index");

const TaskSchema = new Schema({
  title: { type: String, required: true },
  score: { type: Number, default: 0 }
})

module.exports = mongoose.model("Task", TaskSchema);
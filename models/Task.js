const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
  email: String,
  createdAt: String,
  completedAt: String,
});

const Task = new mongoose.model('Task', taskSchema);

module.exports = { Task };

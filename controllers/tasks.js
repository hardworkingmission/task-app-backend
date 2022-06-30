const { Task } = require('../models/Task');

const allTasks = async (req, res) => {
  const result = await Task.find({});
  res.send(result);
};

const singleTask = async (req, res) => {
  const taskId = req.params.id;
  const result = await Task.findById(taskId);
  res.send(result);
};

const createTask = async (req, res) => {
  const newtask = req.body;
  const result = await Task.create(newtask);
  res.send(result);
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  const result = await Task.findByIdAndUpdate(taskId, updatedTask);
  res.send(result);
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const result = await Task.findByIdAndDelete(taskId);
  res.send(result);
};

module.exports = {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
};

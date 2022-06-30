const { Task } = require('../models/Task');

//all tasks
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

const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const result = await Task.findByIdAndUpdate(taskId, updatedTask, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const result = await Task.findByIdAndDelete(taskId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
};

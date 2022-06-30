const express = require('express');
const router = express.Router();
const {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(allTasks).post(createTask);
router.route('/:id').get(singleTask).patch(updateTask).delete(deleteTask);

module.exports = router;

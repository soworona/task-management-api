const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/', taskController.createTask);

router.get('/', taskController.getAllTask);

router.get('/:id', taskController.getTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

router.patch('/:id/status', taskController.updateTaskStatus);

module.exports = router;

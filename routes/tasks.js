const express = require('express');
const router = express.Router();

const {createTask, getAllTasks, getTask, updateTask, deleteTask} = require('../controllers/tasks')


router.route('/getsingletask/:id').get(getTask)
router.route('/post').post(createTask)
router.route('/getalltasks').get(getAllTasks)
router.route('/deletesingletask').delete(deleteTask)
router.route('/updatesingletask/:id').patch(updateTask)


module.exports = router;
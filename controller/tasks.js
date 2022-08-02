const task = require("../models/task")
const Task = require("../models/task")

const getAllTasks = async (req, res) => {
  // res.send("get all tasks")
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks: tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = (req, res) => {
  console.log(req.params)
  res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
  res.send("update the task")
}

const deleteTask = (req, res) => {
  res.send("delete the task")
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

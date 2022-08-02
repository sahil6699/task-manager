const Task = require("../models/task")

const getAllTasks = (req, res) => {
  res.send("get all tasks")
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

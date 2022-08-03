const Task = require("../models/task")
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async (req, res) => {
  // res.send("get all tasks")

  const tasks = await Task.find({})
  // TODO: some other type of responses used in the community
  //res.status(200).json({task, amount: task.length})
  //res.status(200).json(status: success, data {task, nbHits: tasks.length})
  res.status(200).json({ tasks: tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    //TODO: don't forget write this return statement
    //if we don't do this then two response i.e in if and the one below will be trigeered
    //we have this error if no of the characters of the id is correct
    //but this id is not matching with any id in the database
    return res.status(404).json({ msg: `No task with id : ${taskID}` })
  }
  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` })
  }
  // res.status(200).send()//some other responses for deleting a task
  // res.status(200).json({ task: null, status: "success" })// some other response of deleting a task
  // res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` })
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

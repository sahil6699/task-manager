const Task = require("../models/task")

const getAllTasks = async (req, res) => {
  // res.send("get all tasks")
  try {
    const tasks = await Task.find({})
    // TODO: some other type of responses used in the community
    //res.status(200).json({task, amount: task.length})
    //res.status(200).json(status: success, data {task, nbHits: tasks.length})
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

const getTask = async (req, res) => {
  try {
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
  } catch (error) {
    //this error msg is set up just in case the actual syntax of the id is totally off
    //i.e the id doesn't have the specified no of characters
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    // res.status(200).send()//some other responses for deleting a task
    // res.status(200).json({ task: null, status: "success" })// some other response of deleting a task
    // res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  console.log(req.params);
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update the task");
};

const deleteTask = (req, res) => {
  res.send("delete the task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

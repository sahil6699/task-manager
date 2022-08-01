const getAllTasks = (req, res) => {
  res.send("all items send all items form the file of the lord of the rings");
};

const createTask = (req, res) => {
  res.send("create the task");
};

const getTask = (req, res) => {
  res.send("get  the task");
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

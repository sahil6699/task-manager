const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://sahil6699:jarvis1966@cluster0.ui9brh6.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

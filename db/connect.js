const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://sahil6699:jarvis1966@cluster0.ui9brh6.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the db..."))
  .catch((err) => console.log(err));

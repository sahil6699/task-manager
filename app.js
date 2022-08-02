const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log("server is listening on the port" + port + ".....")
    );
  } catch (error) {
    console.log(error);
  }
};

start();

const express = require("express");
const cors = require("cors");
const socket = require("./socket");
const { createServer } = require("http");
// const mongoose = require("mongoose");

const app = express();
const server = createServer(app);

/*** CONNECT TO MONGODB DATATBASE HERE ***/

// mongoose.Promise = global.Promise;
// mongoose
//   .connect("insert Mongo URI here", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.info("BACKEND: Connected to MongoDB");

//   })
//   .catch((err) => {
//     console.error(err.message);
//     console.error(`BACKEND: Failed to connect to MongoDB`);
//   });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

socket(server);

app.get("/", (req, res) => {
  res.send(`Hello world.`);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.info(`BACKEND: listening on ${port}`);
});

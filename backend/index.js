const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

const app = express();

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
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Hello world.`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.info(`BACKEND: listening on ${port}`);
});

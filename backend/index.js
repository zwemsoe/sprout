const express = require("express");
const cors = require("cors");
const socket = require("./socket");
const { createServer } = require("http");
const { nanoid } = require("nanoid");
const { client_url } = require("./constants");

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", client_url],
  })
);

socket(server);

app.get("/", (req, res) => {
  res.send(`Hello world.`);
});

app.post("/signup", (req, res) => {
  const id = nanoid();
  let events = [];
  res.send({ ...req.body, id, events });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.info(`BACKEND: listening on ${port}`);
});

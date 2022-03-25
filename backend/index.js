import express from "express";
import cors from "cors";
import socket from "./socket.js";
import { createServer } from "http";
import { client_url } from "./constants.js";

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

// app.post("/restaurant/signup", (req, res) => {
//   const id = nanoid();
//   res.send({ ...req.body, id });
// });

// app.post("/user/signup", (req, res) => {
//   const id = nanoid();
//   res.send({ ...req.body, id, events });
// });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.info(`BACKEND: listening on ${port}`);
});

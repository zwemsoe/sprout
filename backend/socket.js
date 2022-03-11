import { Server } from "socket.io";
import { client_url } from "./constants.js";
import userEventHandler from "./event-handlers/user.js";
import resturantEventHandler from "./event-handlers/restaurant.js";
const url = client_url;

export default function socket(server) {
  const io = new Server(server, {
    cors: {
      origin: url,
    },
  });

  io.on("connection", (socket) => {
    userEventHandler(socket, io);
    resturantEventHandler(socket, io);

    socket.on("disconnect", (reason) => {
      console.log("disconnecting ");
    });
  });

  return io;
}

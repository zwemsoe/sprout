const { Server } = require("socket.io");
const url = "http://localhost:3000";

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: url,
    },
  });

  io.on("connection", (socket) => {
    require("./event-handlers/user")(socket, io);
    require("./event-handlers/server")(socket, io);
    console.log("connected");
  });

  return io;
};

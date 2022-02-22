const { Server } = require("socket.io");
const { client_url } = require("./constants");
const url = client_url;

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: url,
    },
  });

  io.on("connection", (socket) => {
    require("./event-handlers/user")(socket, io);
    require("./event-handlers/restaurant")(socket, io);
  });

  return io;
};

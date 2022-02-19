module.exports = (socket, io) => {
  socket.on("user_join", () => {
    console.log("user joined: ");
    io.emit("join");
  });

  //user leaves
  socket.on("disconnect", (reason) => {
    console.log("disconnecting: ");
  });
};

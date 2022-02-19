module.exports = (socket, io) => {
  socket.on("server_join", () => {
    console.log("server joined: ");
  });

  //user leaves
  socket.on("disconnect", (reason) => {
    console.log("disconnecting: ");
  });
};

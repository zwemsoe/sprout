module.exports = (socket, io) => {
  socket.on("restaurant:join_room", ({ id }) => {
    socket.join(id);
    socket.to(id).emit("web:get_user_data");
  });

  //user leaves
  socket.on("disconnect", (reason) => {
    console.log("disconnecting ");
  });
};

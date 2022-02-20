module.exports = (socket, io) => {
  socket.on("user:join_room", ({ user }) => {
    socket.join(user.id);
  });

  socket.on("user:receive_user_data", ({ user }) => {
    socket.to(user.id).emit("web:save_user_data", { user });
    socket.emit("web:scan_success");
  });

  socket.on("user:send_event", (user) => {
    socket.to(user.id).emit("web:notify_server", user);
  });

  //user leaves
  socket.on("disconnect", (reason) => {
    console.log("disconnecting ");
  });
};

import { setUser, getUser } from "../utils.js";

export default function userEventHandler(socket, io) {
  socket.on("user:join_room", ({ restId, events, userId, name }) => {
    socket.join(restId);
    setUser({ events, userId, name });
  });

  socket.on("user:send_event", ({ restId, user }) => {
    socket.to(user.id).emit("app:notify_server", user);
  });
}

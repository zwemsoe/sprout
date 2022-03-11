import { setRoom } from "../utils.js";

export default function resturantEventHandler(socket, io) {
  socket.on("restaurant:join_room", (restaurant) => {
    socket.join(restaurant.id);
    setRoom(restaurant);
  });
}

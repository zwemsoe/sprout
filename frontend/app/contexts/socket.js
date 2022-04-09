import { createContext, useContext } from "react";
import ioClient from "socket.io-client";
import { SERVER_IP } from "@env";

const url = `http://${SERVER_IP}:5000`;
export const socket = ioClient(url, {
  transports: ["websocket"],
});
export const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

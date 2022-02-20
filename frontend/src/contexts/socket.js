import { createContext } from "react";
import ioClient from "socket.io-client";
import { server_url } from "../constants";

const url = server_url;
export const socket = ioClient(url);
export const SocketContext = createContext(socket);

import React, { useEffect, useContext } from "react";
import { SocketContext } from "../contexts/socket";

export default function SignUpPage() {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit("user_join");
    console.log("wat");
  }, []);

  useEffect(() => {
    socket.on("join", () => {
      console.log("joined!");
    });
  }, []);

  return <h1>Sign up page</h1>;
}

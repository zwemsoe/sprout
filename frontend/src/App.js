import { Routes, Route } from "react-router-dom";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SocketContext, socket } from "./contexts/socket";
import SignUpPage from "./pages/SignUpPage";
import UserViewPage from "./pages/UserViewPage";
import ServerViewPage from "./pages/ServerViewPage";
import QRCodePage from "./pages/QRCodePage";
import "inter-ui/inter.css";

const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui",
  },
  colors: {
    darkGreen: '#064635',
    background: '#519259',
    lightYellow: '#F4EEA9',
    yellow: "#F0BB62",
    white: "#edf2f7"
  }
});

function App() {
  return (
    <Box bg="#519259">
      <ChakraProvider theme={theme}>
        <SocketContext.Provider value={socket}>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="qrcode" element={<QRCodePage />} />
            <Route path=":id" element={<ServerViewPage />} />
            <Route path="user/:id" element={<UserViewPage />} />
          </Routes>
        </SocketContext.Provider>
      </ChakraProvider>
    </Box>
  );
}

export default App;

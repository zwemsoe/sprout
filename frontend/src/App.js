import { Routes, Route } from "react-router-dom";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SocketContext, socket } from "./contexts/socket";
import SignUpPage from "./pages/SignUpPage";
import UserViewPage from "./pages/UserViewPage";
import RestaurantViewPage from "./pages/RestaurantViewPage";
import QRCodePage from "./pages/QRCodePage";
import "inter-ui/inter.css";

const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui",
  },
  colors: {
    darkGreen: "#064635",
    background: "#519259",
    lightYellow: "#F4EEA9",
    yellow: "#F0BB62",
    white: "#edf2f7",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="background">
        <SocketContext.Provider value={socket}>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="qrcode" element={<QRCodePage />} />
            <Route path=":id" element={<RestaurantViewPage />} />
            <Route path="user/:id" element={<UserViewPage />} />
          </Routes>
        </SocketContext.Provider>
      </Box>
    </ChakraProvider>
  );
}

export default App;

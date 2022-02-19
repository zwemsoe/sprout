import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { SocketContext, socket } from "./contexts/socket";
import SignUpPage from "./pages/SignUpPage";
import UserViewPage from "./pages/UserViewPage";
import QRCodePage from "./pages/QRCodePage";

function App() {
  return (
    <Box bg='green'>
      <SocketContext.Provider value={socket}>
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route path='qrcode' element={<QRCodePage />} />
      {/* <Route path=':key' element={<ServerViewPage />} /> */}
          <Route path='user/:key' element={<UserViewPage />} />
        </Routes>
      </SocketContext.Provider>
    </Box>
  );
}

export default App;

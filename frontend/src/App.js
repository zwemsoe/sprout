import { Routes, Route } from "react-router-dom";
import { SocketContext, socket } from "./contexts/socket";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        {/* <Route path='qrcode' element={<QRCodePage />} />
      <Route path='user/:key' element={<UserViewPage />} />
      <Route path=':key' element={<ServerViewPage />} /> */}
      </Routes>
    </SocketContext.Provider>
  );
}

export default App;

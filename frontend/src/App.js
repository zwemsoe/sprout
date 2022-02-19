import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      {/* <Route path='qrcode' element={<QRCodePage />} />
      <Route path='user/:key' element={<UserViewPage />} />
      <Route path=':key' element={<ServerViewPage />} /> */}
    </Routes>
  );
}

export default App;

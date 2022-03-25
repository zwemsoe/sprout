import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./routes/AuthStack";
import QRCodePage from "./screens/restaurant/QRCode";
import RoomPage from "./screens/restaurant/Room";
import IndividualUserPage from "./screens/restaurant/IndividualUser";
import ScanPage from "./screens/user/ScanPage";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

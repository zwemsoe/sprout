import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./routes/AuthStack";

export default function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

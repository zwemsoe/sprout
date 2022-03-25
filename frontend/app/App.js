import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./routes/AuthStack";
import { StateProvider } from "./store/provider";
import { initialState, stateReducer } from "./store/reducer";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StateProvider initialState={initialState} reducer={stateReducer}>
          <AuthStack />
        </StateProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

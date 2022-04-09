import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SocketContext, socket } from "./contexts/socket";
import AuthStack from "./routes/AuthStack";
import { StateProvider } from "./store/provider";
import { initialState, stateReducer } from "./store/reducer";
import { useEffect } from "react";


export default function App() {
  
  useEffect(()=> {
    return () => {
      socket?.disconnect();
      socket?.removeAllListeners();
    }
  }, [])

  useEffect(() => {
    socket?.io.on("open", () => console.log('connected from expo'));
    socket?.io.on("close", () => console.log('closed from expo'));
  }, [socket])

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StateProvider initialState={initialState} reducer={stateReducer}>
          <SocketContext.Provider value={socket}>
            <AuthStack />
          </SocketContext.Provider>
        </StateProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

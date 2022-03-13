import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import ScanPage from "../screens/user/ScanPage";
import ActionsPage from "../screens/user/ActionPage";
import QRCodePage from "../screens/restaurant/QRCode";
import Room from "../screens/restaurant/Room";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ScanPage" component={ScanPage} />
      <Stack.Screen name="ActionsPage" component={ActionsPage} />
      <Stack.Screen name="QRCodePage" component={QRCodePage} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}

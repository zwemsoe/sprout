import { createStackNavigator } from "@react-navigation/stack";
import QRCodePage from '../screens/restaurant/QRCode'
import Room from "../screens/restaurant/Room";

const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QRCodePage" component={QRCodePage} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}

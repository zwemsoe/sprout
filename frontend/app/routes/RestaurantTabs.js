import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IndividualUserPage from "../screens/restaurant/IndividualUser";
import QRCodePage from "../screens/restaurant/QRCode";
import RoomPage from "../screens/restaurant/Room";

const Tab = createBottomTabNavigator();

export default function RestaurantTabs() {
  return (
    <Tab.Navigator initialRouteName="Restaurant">
      <Tab.Screen name="QRCode" component={QRCodePage} />
      <Tab.Screen name="Room" component={RoomStack} />
    </Tab.Navigator>
  );
}

const ScreenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

function RoomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RoomPage"
        component={RoomPage}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="IndividualUserPage"
        component={IndividualUserPage}
        options={ScreenOptions}
      />
    </Stack.Navigator>
  );
}

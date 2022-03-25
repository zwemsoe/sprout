import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import RestaurantTabs from "./RestaurantTabs";
import CustomerTabs from "./CustomerTabs";
import { useStateContext } from "../store/provider";
import { getAuth } from "../utils";

const ScreenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

export default function AuthStack() {
  const auth = getAuth();
  console.log(auth);
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={ScreenOptions} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantTabs}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="Customer"
        component={CustomerTabs}
        options={ScreenOptions}
      />
    </Stack.Navigator>
  );
}

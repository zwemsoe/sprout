import { createStackNavigator } from "@react-navigation/stack";
import ScanPage from "../screens/user/ScanPage";
import ActionsPage from "../screens/user/ActionPage";

const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScanPage" component={ScanPage} />
      <Stack.Screen name="ActionsPage" component={ActionsPage} />
    </Stack.Navigator>
  );
}

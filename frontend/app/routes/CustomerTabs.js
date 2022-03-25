import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanPage from "../screens/user/ScanPage";
import ActionsPage from "../screens/user/ActionPage";

const Tab = createBottomTabNavigator();

export default function CustomerTabs() {
  return (
    <Tab.Navigator initialRouteName="Customer">
      <Tab.Screen name="ScanPage" component={ScanPage} />
      <Tab.Screen name="ActionsPage" component={ActionsPage} />
    </Tab.Navigator>
  );
}

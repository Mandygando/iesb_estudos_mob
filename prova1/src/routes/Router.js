import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROTAS


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        {/* <Stack.Screen name="" component={} /> */}
         {/* <Stack.Screen name="" component={} />  */}
        {/* <Stack.Screen name="" component={} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}